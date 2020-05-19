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
  if (data) {
    yield put(clientSignupSuccess());
    yield put(
      showModal(
        ModalType.Success,
        "Your registration is done. Please wait Admin to accept your registration",
        () => forwardTo(RETAILER_DEFAULT_ROUTE)
      )
    );
  } else {
    yield put(clientSignupFailure());
  }
}

export function* clientSignupSaga() {
  yield takeLatest(CLIENT_SIGNUP, clientSignup);
}
