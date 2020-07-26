import { put, takeLatest, call } from "redux-saga/effects";
import { appUrl } from "routing";
import {
  authenticateApi,
  forgotPasswordApi,
  resetPasswordApi,
  logoutApi,
} from "provider/apis/authentication";
import {
  AuthenticateAction,
  RecheckTokenAction,
  ForgotPasswordAction,
  ResetPasswordAction,
  ModalType,
  showModal,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  LOGOUT,
  RECHECK_TOKEN,
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
} from "provider/actions";
import {
  ADMIN,
  IMPORTER,
  RETAILER,
  TokenResponse,
  SimpleResponse,
  ResponseMessage,
  Token,
  Error,
} from "provider/models";
import { getErrorMessage, getSuccessMessage } from "provider/apis";
import { parseJwt, forwardTo } from "helpers";
import { handleSimpleResponseFromAPI } from "./helper";

class User {
  firstName: string;
  lastName: string;
  agencyId: string;
  userId: string;
  constructor(
    firstName: string,
    lastName: string,
    agencyId: string,
    userId: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.agencyId = agencyId;
    this.userId = userId;
  }
}

function* authenticate({
  payload: { username, password },
}: AuthenticateAction) {
  const data: TokenResponse = yield authenticateApi(username, password);
  if ((data as Error).error) {
    yield put({
      type: AUTHENTICATE_FAILURE,
      payload: {
        error: getErrorMessage((data as Error).error[0]),
      },
    });
  } else {
    yield localStorage.setItem("token", (data as Token).token);
    const parseAutInfo = yield parseJwt((data as Token).token);
    const account = yield new User(
      parseAutInfo.firstName,
      parseAutInfo.lastName,
      parseAutInfo.agencyId,
      parseAutInfo.userId
    );

    yield put({
      type: AUTHENTICATE_SUCCESS,
      payload: {
        token: (data as Token).token,
        role: parseAutInfo.role,
        account,
      },
    });
    switch (parseAutInfo.role) {
      case ADMIN:
        yield call(forwardTo, appUrl.adminDefaultPage);
        break;
      case RETAILER:
        yield call(forwardTo, appUrl.RetailerDefaultPage);
        break;
      case IMPORTER:
        yield call(forwardTo, appUrl.importerDefaultPage);
        break;
    }
  }
}

function* recheckToken({ payload: { token, location } }: RecheckTokenAction) {
  const parseAutInfo = yield parseJwt(token);
  const account = yield new User(
    parseAutInfo.firstName,
    parseAutInfo.lastName,
    parseAutInfo.agencyId,
    parseAutInfo.userId
  );
  yield put({
    type: AUTHENTICATE_SUCCESS,
    payload: { token: token, role: parseAutInfo.role, account },
  });
  yield call(forwardTo, location);
}

function* forgotPassword({ payload }: ForgotPasswordAction) {
  yield put(showModal(ModalType.Loading, ""));
  const data: SimpleResponse<string> = yield forgotPasswordApi(payload);
  yield handleSimpleResponseFromAPI(data);
}

function* resetPassword({ payload }: ResetPasswordAction) {
  yield put(showModal(ModalType.Loading, ""));
  const data: SimpleResponse<string> = yield resetPasswordApi(payload);
  yield handleSimpleResponseFromAPI(data, () => {
    forwardTo(appUrl.homePage);
  });
}

function* logout() {
  yield logoutApi();
  yield localStorage.removeItem("token");
  yield call(forwardTo, appUrl.loginPage);
}

export function* authenticationSaga() {
  yield takeLatest(AUTHENTICATE, authenticate);
  yield takeLatest(RECHECK_TOKEN, recheckToken);
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(RESET_PASSWORD, resetPassword);
  yield takeLatest(LOGOUT, logout);
}
