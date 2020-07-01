import { put, takeLatest } from "redux-saga/effects";
import {
  clientSignupApi,
  verifyMailApi,
  getErrorMessage,
  getSuccessMessage,
} from "provider/apis";
import { SimpleResponse, ResponseMessage, Error } from "provider/models";
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
import { RETAILER_DEFAULT_ROUTE } from "constant";
import { forwardTo } from "helpers";

function* clientSignup({ payload }: ClientSignupAction) {
  yield put(showModal(ModalType.Loading, ""));
  const data = yield clientSignupApi(payload);
  if (data.error) {
    yield put(showModal(ModalType.Error, "Your registration has problem"));
    yield put(clientSignupFailure());
  } else {
    yield put(clientSignupSuccess());
    yield put(
      showModal(
        ModalType.Success,
        "Your registration is done. Please wait Admin to accept your registration",
        () => forwardTo(RETAILER_DEFAULT_ROUTE)
      )
    );
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
