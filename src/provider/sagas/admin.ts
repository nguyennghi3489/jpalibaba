import {
  ActiveUserAction,
  ACTIVE_USER,
  DeleteUserAction,
  deleteUserSuccess,
  DELETE_USER,
  ExportAdminItemAction,
  exportAdminItemSuccess,
  EXPORT_ADMIN_ITEM,
  ModalType,
  showModal,
  UpdateTemplateSettingAction,
  updateTemplateSettingSuccess,
  UPDATE_TEMPLATE_SETTING,
} from "provider/actions";
import {
  activeUserApi,
  deleteUserApi,
  exportAdminItemsApi,
  getErrorMessage,
  updateTemplateSettingApi,
} from "provider/apis";
import { Error, SimpleResponse } from "provider/models";
import { put, takeLatest } from "redux-saga/effects";

function* activeUserCall({ payload }: ActiveUserAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data: SimpleResponse<string> = yield activeUserApi(payload);
    if ((data as Error).error) {
      yield put(
        showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
      );
    } else {
      yield put(showModal(ModalType.Success, "Active User Successfully"));
    }
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
