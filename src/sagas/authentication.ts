import { put, takeLatest, all, call } from "redux-saga/effects";
import { authenticateApi, recheckTokenApi } from "apis/authentication";
import { AuthenticateAction, RecheckTokenAction } from "actions";
import { parseJwt, forwardTo } from "helpers";
import {
  ADMIN_DEFAULT_ROUTE,
  IMPORTER_DEFAULT_ROUTE,
  RETAILER_DEFAULT_ROUTE,
  LOGIN_ROUTE
} from "constant";

const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";

function* authenticate({
  payload: { username, password }
}: AuthenticateAction) {
  const data = yield authenticateApi(username, password);
  yield localStorage.setItem("token", data.jwt);
  const parseAutInfo = yield parseJwt(data.jwt);
  yield put({
    type: AUTHENTICATE_SUCCESS,
    payload: { token: data.jwt, role: parseAutInfo.role }
  });

  switch (parseAutInfo.role) {
    case "admin":
      yield call(forwardTo, ADMIN_DEFAULT_ROUTE);
      break;
    case "retailer":
      yield call(forwardTo, RETAILER_DEFAULT_ROUTE);
      break;
    case "importer":
      yield call(forwardTo, IMPORTER_DEFAULT_ROUTE);
      break;
  }
}

function* recheckToken({ payload: { token, location } }: RecheckTokenAction) {
  yield recheckTokenApi(token);
  const parseAutInfo = yield parseJwt(token);
  yield put({
    type: AUTHENTICATE_SUCCESS,
    payload: { token: token, role: parseAutInfo.role }
  });
  yield call(forwardTo, location);
}

function* logout() {
  yield localStorage.removeItem("token");
  yield call(forwardTo, LOGIN_ROUTE);
}

export function* authenticationSage() {
  yield takeLatest("AUTHENTICATE", authenticate);
  yield takeLatest("RECHECK_TOKEN", recheckToken);
  yield takeLatest("LOGOUT", logout);
}
