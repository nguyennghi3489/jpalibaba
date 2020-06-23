import { put, takeLatest, call } from "redux-saga/effects";
import {
  deleteUserApi,
  updateTemplateSettingApi,
  exportAdminItemsApi,
  activeUserApi,
} from "provider/apis";
import {
  DELETE_USER,
  UPDATE_TEMPLATE_SETTING,
  EXPORT_ADMIN_ITEM,
  ACTIVE_USER,
  UpdateTemplateSettingAction,
  updateTemplateSettingSuccess,
  DeleteUserAction,
  deleteUserSuccess,
  ExportAdminItemAction,
  exportAdminItemSuccess,
  ActiveUserAction,
  activeUserSuccess,
  ModalType,
  showModal,
} from "provider/actions";

function* activeUserCall({ payload }: ActiveUserAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const result = yield activeUserApi(payload);
    yield put(activeUserSuccess(result));
    yield put(showModal(ModalType.Success, "Active User Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* exportAdminItemCall({ payload }: ExportAdminItemAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const result = yield exportAdminItemsApi(payload);
    yield put(exportAdminItemSuccess(result));
    yield put(showModal(ModalType.Success, "Export Data Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

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

export function* adminSaga() {
  yield takeLatest(DELETE_USER, deleteUserCall);
  yield takeLatest(UPDATE_TEMPLATE_SETTING, updateTemplateSettingCall);
  yield takeLatest(EXPORT_ADMIN_ITEM, exportAdminItemCall);
  yield takeLatest(ACTIVE_USER, activeUserCall);
}
