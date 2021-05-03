import { PayloadAction } from "@reduxjs/toolkit";
import { goBack, forwardTo, parseJwt } from "helpers";
import { ModalType, showModal } from "provider/actions";
import {
  AUTHENTICATE_FAILURE,
  AUTHENTICATE_SUCCESS,
  authenticationSlice,
} from "provider/actions/slice/authentication";
import { getErrorMessage } from "provider/apis";
import {
  authenticateApi,
  forgotPasswordApi,
  logoutApi,
  resetPasswordApi,
} from "provider/apis/authentication";
import {
  ADMIN,
  Error,
  IMPORTER,
  RETAILER,
  SimpleResponse,
  Token,
  TokenResponse,
} from "provider/models";
import {
  LoginInfo,
  RecheckTokenInfo,
  ResetPasswordInfo,
} from "provider/models/authentication";
import { call, put, takeLatest } from "redux-saga/effects";
import { appUrl } from "routing";
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
  payload: { username, password, redirectPage },
}: PayloadAction<LoginInfo>) {
  const data: TokenResponse = yield authenticateApi(username, password);
  if ((data as Error).error) {
    yield put(
      authenticationSlice.actions.authenticateFailure({
        error: getErrorMessage((data as Error).error[0]),
      })
    );
  } else {
    yield localStorage.setItem("token", (data as Token).token);
    const parseAutInfo = yield parseJwt((data as Token).token);
    const account = yield new User(
      parseAutInfo.firstName,
      parseAutInfo.lastName,
      parseAutInfo.agencyId,
      parseAutInfo.userId
    );

    yield put(
      authenticationSlice.actions.authenticateSuccess({
        token: (data as Token).token,
        role: parseAutInfo.role,
        account,
      })
    );
    switch (parseAutInfo.role) {
      case ADMIN:
        yield call(forwardTo, redirectPage ?? appUrl.adminDefaultPage);
        break;
      case RETAILER:
        yield call(forwardTo, redirectPage ?? appUrl.RetailerDefaultPage);
        break;
      case IMPORTER:
        yield call(forwardTo, redirectPage ??appUrl.importerDefaultPage);
        break;
    }
  }
}

function* recheckToken({
  payload: { token, location },
}: PayloadAction<RecheckTokenInfo>) {
  const parseAutInfo = yield parseJwt(token);
  const account = yield new User(
    parseAutInfo.firstName,
    parseAutInfo.lastName,
    parseAutInfo.agencyId,
    parseAutInfo.userId
  );
  yield put(
    authenticationSlice.actions.authenticateSuccess({
      token: token,
      role: parseAutInfo.role,
      account,
    })
  );
  yield call(forwardTo, location);
}

function* forgotPassword({ payload }: PayloadAction<string>) {
  yield put(showModal(ModalType.Loading, ""));
  const data: SimpleResponse<string> = yield forgotPasswordApi(payload);
  yield handleSimpleResponseFromAPI(data);
}

function* resetPassword({ payload }: PayloadAction<ResetPasswordInfo>) {
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
  yield takeLatest(authenticationSlice.actions.authenticate, authenticate);
  yield takeLatest(authenticationSlice.actions.recheckToken, recheckToken);
  yield takeLatest(authenticationSlice.actions.forgotPassword, forgotPassword);
  yield takeLatest(authenticationSlice.actions.resetPassword, resetPassword);
  yield takeLatest(authenticationSlice.actions.logout, logout);
}
