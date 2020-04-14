import { put, takeLatest } from "redux-saga/effects";
import { clientSignupApi } from "apis";
import {
  ClientSignupAction,
  clientSignupSuccess,
  clientSignupFailure,
} from "actions";
import { CLIENT_SIGNUP } from "actions";

function* clientSignup({ payload }: ClientSignupAction) {
  const data = yield clientSignupApi(payload);

  if (data) {
    yield put(clientSignupSuccess());
  } else {
    yield put(clientSignupFailure());
  }
}

export function* clientSignupSaga() {
  yield takeLatest(CLIENT_SIGNUP, clientSignup);
}
