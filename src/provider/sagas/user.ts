import { put, takeLatest, call, delay } from "redux-saga/effects";
import { updateUserInfoApi, updateAddressInfoApi } from "provider/apis";
import {
  UPDATE_BASIC_INFO,
  UpdateBasicInfoAction,
  UPDATE_ADDRESS_INFO,
  UpdateAddressInfoAction,
  ModalType,
  showModal,
  hideModal,
} from "provider/actions";

function* updateUserInfo({ payload }: UpdateBasicInfoAction) {
  try {
    const data = yield updateUserInfoApi(payload.id, payload.data);
    yield put(showModal(ModalType.Success, "Update Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* updateAddressInfo({ payload }: UpdateAddressInfoAction) {
  try {
    const data = yield updateAddressInfoApi(
      payload.id,
      payload.data,
      payload.type
    );
    yield put(showModal(ModalType.Success, "Update Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

export function* userSaga() {
  yield takeLatest(UPDATE_BASIC_INFO, updateUserInfo);
  yield takeLatest(UPDATE_ADDRESS_INFO, updateAddressInfo);
}
