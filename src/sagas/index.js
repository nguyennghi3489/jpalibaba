import { put, takeLatest, all, call } from "redux-saga/effects";
import history from "../history";

const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";

function forwardTo(location) {
  history.push(location);
}

function* authenticate({ payload, payload: { username, password } }) {
  if (username == "admin") {
    yield localStorage.setItem("token", "12345");
    yield put({
      type: AUTHENTICATE_SUCCESS,
      payload: { token: "12345", role: "admin" }
    });
    yield call(forwardTo, "/admin/user-management-page");
  } else if (username == "retailer") {
    yield localStorage.setItem("token", "123456");
    yield put({
      type: AUTHENTICATE_SUCCESS,
      payload: { token: "123456", role: "retailer" }
    });
    yield call(forwardTo, "/admin/checkout-page");
  } else if (username == "importer") {
    yield localStorage.setItem("token", "1234567");
    yield put({
      type: AUTHENTICATE_SUCCESS,
      payload: { token: "1234567", role: "importer" }
    });
    yield call(forwardTo, "/admin/user-page");
  }
}
function* actionWatcher() {
  yield takeLatest("AUTHENTICATE", authenticate);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
