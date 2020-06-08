import { put, takeLatest, call, delay } from "redux-saga/effects";
import { clientSignupApi } from "provider/apis";
import {
  CLIENT_SIGNUP,
  ClientSignupAction,
  clientSignupSuccess,
  clientSignupFailure,
  ModalType,
  showModal,
  hideModal,
} from "provider/actions";
import { RETAILER_DEFAULT_ROUTE } from "constant";
import { forwardTo } from "helpers";

function* clientSignup({ payload }: ClientSignupAction) {
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
