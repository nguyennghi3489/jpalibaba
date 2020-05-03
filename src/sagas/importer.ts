import { put, takeLatest, call } from "redux-saga/effects";
import { addItemApi } from "apis";
import {
  ADD_PRODUCT,
  AddProductAction,
  addProductSuccess,
  ModalType,
  showModal,
} from "actions";

function* addProductCall({ payload }: AddProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield addItemApi(payload);
    yield put(showModal(ModalType.Success, "Add Product Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

export function* importerSaga() {
  yield takeLatest(ADD_PRODUCT, addProductCall);
}
