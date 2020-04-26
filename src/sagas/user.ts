import { put, takeLatest, call } from "redux-saga/effects";
import { deleteUserApi, updateTemplateSettingApi } from "apis";
import {
  DELETE_USER,
  UPDATE_TEMPLATE_SETTING,
  UpdateTemplateSettingAction,
  updateTemplateSettingSuccess,
  updateTemplateSettingFailure,
  DeleteUserAction,
  deleteUserSuccess,
  deleteUserFailure,
  ModalType,
  showModal,
  hideModal,
} from "actions";

function* updateTemplateSettingCall({ payload }: UpdateTemplateSettingAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const result = yield updateTemplateSettingApi(payload);
    yield put(updateTemplateSettingSuccess(result));
    yield put(showModal(ModalType.Success, "Update Template Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* deleteUserCall({ id }: DeleteUserAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    yield deleteUserApi(id);
    yield put(deleteUserSuccess(id));
    yield put(showModal(ModalType.Success, "User is deleted successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

export function* userSaga() {
  yield takeLatest(DELETE_USER, deleteUserCall);
  yield takeLatest(UPDATE_TEMPLATE_SETTING, updateTemplateSettingCall);
}
