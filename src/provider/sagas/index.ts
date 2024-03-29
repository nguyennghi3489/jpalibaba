import { all } from "redux-saga/effects";
import { addressSaga } from "./address";
import { adminSaga } from "./admin";
import { authenticationSaga } from "./authentication";
import { galleryHandlerSaga } from "./gallery";
import { importerSaga } from "./importer";
import { orderSaga } from "./order";
import { clientSignupSaga } from "./signup";
import { userSaga } from "./user";
import { mailSettingSaga } from "./mail-setting";

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    clientSignupSaga(),
    adminSaga(),
    importerSaga(),
    userSaga(),
    galleryHandlerSaga(),
    addressSaga(),
    orderSaga(),
    mailSettingSaga(),
  ]);
}
