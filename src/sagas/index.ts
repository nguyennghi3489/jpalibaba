import { authenticationSaga } from "./authentication";
import { clientSignupSaga } from "./signup";
import { all, call } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([authenticationSaga(), clientSignupSaga()]);
}
