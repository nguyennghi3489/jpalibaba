import { put, takeLatest } from "redux-saga/effects";
import {
  updateUserInfoApi,
  updateAddressInfoApi,
  getUsersApi,
} from "provider/apis";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  UPDATE_BASIC_INFO,
  UpdateBasicInfoAction,
  UPDATE_ADDRESS_INFO,
  UpdateAddressInfoAction,
  ModalType,
  showModal,
} from "provider/actions";
import { User } from "provider/models";

function* getUsers() {
  try {
    const data = yield getUsersApi();

    yield put({
      type: GET_USERS_SUCCESS,
      payload: {
        users: data.users.map((item: any) => User.fromApi(item)),
      },
    });
    // yield put(showModal(ModalType.Success, "Update Successfully"));
  } catch (error) {
    // yield put(showModal(ModalType.Error, error));
  }
}

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
  yield takeLatest(GET_USERS, getUsers);
  yield takeLatest(UPDATE_BASIC_INFO, updateUserInfo);
  yield takeLatest(UPDATE_ADDRESS_INFO, updateAddressInfo);
}
