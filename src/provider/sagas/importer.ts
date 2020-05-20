import { put, takeLatest, call } from "redux-saga/effects";
import { addItemApi, deleteItemApi, importItemApi } from "provider/apis";
import {
  ADD_PRODUCT,
  AddProductAction,
  DELETE_PRODUCT,
  DeleteProductAction,
  IMPORT_PRODUCT,
  ImportProductAction,
  ModalType,
  showModal,
} from "provider/actions";

function* addProductCall({ payload }: AddProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield addItemApi(payload);
    yield put(showModal(ModalType.Success, "Add Product Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* deleteProductCall({ payload }: DeleteProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield deleteItemApi(payload);
    yield put(showModal(ModalType.Success, "Delete Product Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* importProductCall({ payload }: ImportProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield importItemApi(payload);
    yield put(showModal(ModalType.Success, "Import Product Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

export function* importerSaga() {
  yield takeLatest(ADD_PRODUCT, addProductCall);
  yield takeLatest(DELETE_PRODUCT, deleteProductCall);
  yield takeLatest(IMPORT_PRODUCT, importProductCall);
}
