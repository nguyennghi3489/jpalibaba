import { put, takeLatest, all, call } from "redux-saga/effects";
import { authenticateApi, recheckTokenApi } from "provider/apis/authentication";
import { AuthenticateAction, RecheckTokenAction } from "provider/actions";
import { parseJwt, forwardTo } from "helpers";
import {
  ADMIN_DEFAULT_ROUTE,
  IMPORTER_DEFAULT_ROUTE,
  RETAILER_DEFAULT_ROUTE,
  LOGIN_ROUTE,
} from "constant";

class User {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";

function* authenticate({
  payload: { username, password },
}: AuthenticateAction) {
  const data = yield authenticateApi(username, password);
  yield localStorage.setItem("token", data.jwt);
  const parseAutInfo = yield parseJwt(data.jwt);
  const user = yield new User(parseAutInfo.firstName, parseAutInfo.lastName);
  yield put({
    type: AUTHENTICATE_SUCCESS,
    payload: {
      token: data.jwt,
      role: parseAutInfo.role,
      user,
    },
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
  const user = yield new User(parseAutInfo.firstName, parseAutInfo.lastName);
  yield put({
    type: AUTHENTICATE_SUCCESS,
    payload: { token: token, role: parseAutInfo.role, user },
  });
  yield call(forwardTo, location);
}

function* logout() {
  yield localStorage.removeItem("token");
  yield call(forwardTo, LOGIN_ROUTE);
}

export function* authenticationSaga() {
  yield takeLatest("AUTHENTICATE", authenticate);
  yield takeLatest("RECHECK_TOKEN", recheckToken);
  yield takeLatest("LOGOUT", logout);
}
