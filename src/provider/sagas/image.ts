import { put, takeLatest } from "redux-saga/effects";
import { addImageApi } from "provider/apis";
import {
  ADD_IMAGE,
  AddImageAction,
  addImageSuccess,
  ModalType,
  showModal,
} from "provider/actions";

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
