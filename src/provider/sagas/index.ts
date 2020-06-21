import { authenticationSaga } from "./authentication";
import { clientSignupSaga } from "./signup";
import { adminSaga } from "./admin";
import { importerSaga } from "./importer";
import { userSaga } from "./user";
import { imageHandlerSaga } from "./image";

import { all, call } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    clientSignupSaga(),
    adminSaga(),
    importerSaga(),
    userSaga(),
    imageHandlerSaga(),
  ]);
}
