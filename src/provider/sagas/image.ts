import { put, takeLatest, call, delay } from "redux-saga/effects";
import { addImageApi } from "provider/apis";
import {
  ADD_IMAGE,
  AddImageAction,
  addImageSuccess,
  ModalType,
  showModal,
  hideModal,
} from "provider/actions";
import { RETAILER_DEFAULT_ROUTE } from "constant";
import { forwardTo } from "helpers";

function* addImage({ payload }: AddImageAction) {
  const data = yield addImageApi(payload);
  if (data.error) {
    yield put(showModal(ModalType.Error, "Your Upload has problem"));
  } else {
    yield put(addImageSuccess(data.message));
  }
}

export function* imageHandlerSaga() {
  yield takeLatest(ADD_IMAGE, addImage);
}
