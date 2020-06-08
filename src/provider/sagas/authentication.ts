import { put, takeLatest, all, call } from "redux-saga/effects";
import { authenticateApi, recheckTokenApi } from "provider/apis/authentication";
import { AuthenticateAction, RecheckTokenAction } from "provider/actions";
import { ADMIN, IMPORTER, RETAILER } from "provider/models";
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
const AUTHENTICATE_FAILURE = "AUTHENTICATE_FAILURE";

function* authenticate({
  payload: { username, password },
}: AuthenticateAction) {
  const data = yield authenticateApi(username, password);
  if (data.message) {
    yield put({
      type: AUTHENTICATE_FAILURE,
      payload: {
        error: data.message,
      },
    });
  } else {
    yield localStorage.setItem("token", data.token);
    const parseAutInfo = yield parseJwt(data.token);
    const account = yield new User(
      parseAutInfo.firstName,
      parseAutInfo.lastName
    );
    yield put({
      type: AUTHENTICATE_SUCCESS,
      payload: {
        token: data.token,
        role: parseAutInfo.role,
        account,
      },
    });

    switch (parseAutInfo.role) {
      case ADMIN:
        yield call(forwardTo, ADMIN_DEFAULT_ROUTE);
        break;
      case RETAILER:
        yield call(forwardTo, RETAILER_DEFAULT_ROUTE);
        break;
      case IMPORTER:
        yield call(forwardTo, IMPORTER_DEFAULT_ROUTE);
        break;
    }
  }
}

function* recheckToken({ payload: { token, location } }: RecheckTokenAction) {
  yield recheckTokenApi(token);
  const parseAutInfo = yield parseJwt(token);
  const account = yield new User(parseAutInfo.firstName, parseAutInfo.lastName);
  yield put({
    type: AUTHENTICATE_SUCCESS,
    payload: { token: token, role: parseAutInfo.role, account },
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
