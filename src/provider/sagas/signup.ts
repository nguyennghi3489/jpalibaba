import { put, takeLatest } from "redux-saga/effects";
import { clientSignupApi, verifyMailApi, getErrorMessage } from "provider/apis";
import { SimpleResponse, Error } from "provider/models";
import {
  CLIENT_SIGNUP,
  VERIFY_USER_MAIL,
  VerifyMailAction,
  verifyMailFailure,
  verifyMailSuccess,
  ClientSignupAction,
  clientSignupSuccess,
  clientSignupFailure,
  ModalType,
  showModal,
} from "provider/actions";
import { appUrl } from "routing";
import { RETAILER_DEFAULT_ROUTE } from "constant";
import { forwardTo } from "helpers";

function* clientSignup({ payload }: ClientSignupAction) {
  yield put(showModal(ModalType.Loading, ""));
  const data: SimpleResponse<string> = yield clientSignupApi(
    payload.singupInfo
  );
  if ((data as Error).error) {
    yield put(
      showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
    );
    yield put(clientSignupFailure());
  } else {
    yield put(clientSignupSuccess());

    if (!payload.admin) {
      yield put(
        showModal(ModalType.SignupSuccess, ``, () => {
          forwardTo(RETAILER_DEFAULT_ROUTE);
        })
      );
    } else {
      yield put(
        showModal(ModalType.Success, "Created User Successfully", () => {
          forwardTo(appUrl.userManagementPage);
        })
      );
    }
  }
}

function* verifyMailCall({ payload }: VerifyMailAction) {
  try {
    const data: SimpleResponse<string> = yield verifyMailApi(payload);
    if ((data as Error).error) {
      yield put(verifyMailFailure());
    } else {
      yield put(verifyMailSuccess());
    }
  } catch (error) {
    yield put(verifyMailFailure());
  }
}

export function* clientSignupSaga() {
  yield takeLatest(CLIENT_SIGNUP, clientSignup);
  yield takeLatest(VERIFY_USER_MAIL, verifyMailCall);
}
