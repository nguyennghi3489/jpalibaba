import { put, takeLatest } from "redux-saga/effects";
import { clientSignupApi } from "provider/apis";
import {
  CLIENT_SIGNUP,
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

export function* clientSignupSaga() {
  yield takeLatest(CLIENT_SIGNUP, clientSignup);
}
