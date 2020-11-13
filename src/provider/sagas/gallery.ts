import {
  AddImageAction,
  addImageSuccess,
  ADD_IMAGE,
  GetGalleryAction,
  getGallerySuccess,
  GET_GALLERY,
  ModalType,
  removeGallerySuccess,
  RemoveImageAction,
  REMOVE_IMAGE,
  showModal,
} from "provider/actions";
import {
  addGalleryPhoto,
  getGalleryPhotos,
  removeGalleryPhotos,
} from "provider/apis/gallery";
import { put, takeLatest } from "redux-saga/effects";

function* addImage({ payload }: AddImageAction) {
  const data = yield addGalleryPhoto(payload);
  if (data.error) {
    yield put(showModal(ModalType.Error, "Your Upload has problem"));
  } else {
    yield put(addImageSuccess(data.message));
  }
}

function* getGallery({ payload }: GetGalleryAction) {
  const data = yield getGalleryPhotos(payload);
  if (data.error) {
    yield put(showModal(ModalType.Error, "Your Gallery Photos has problem"));
  } else {
    yield put(getGallerySuccess(data.message));
  }
}

function* removeGallery({ payload }: RemoveImageAction) {
  const data = yield removeGalleryPhotos(payload);
  if (data.error) {
    yield put(showModal(ModalType.Error, "Your Gallery Photos has problem"));
  } else {
    yield put(removeGallerySuccess(data.message));
  }
}

export function* galleryHandlerSaga() {
  yield takeLatest(ADD_IMAGE, addImage);
  yield takeLatest(GET_GALLERY, getGallery);
  yield takeLatest(REMOVE_IMAGE, removeGallery);
}
