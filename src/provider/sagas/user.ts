import { put, takeLatest } from "redux-saga/effects";
import {
  updateAgencyInfoApi,
  updateAddressInfoApi,
  getUsersApi,
  getAgencyInfoApi,
  getErrorMessage,
  getSuccessMessage,
} from "provider/apis";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  UPDATE_AGENCY_INFO,
  UpdateAgencyInfoAction,
  UPDATE_ADDRESS_INFO,
  UpdateAddressInfoAction,
  ModalType,
  showModal,
  GET_AGENCY_INFO,
  GET_AGENCY_INFO_SUCCESS,
  GetAgencyInfoAction,
} from "provider/actions";
import {
  User,
  SimpleResponse,
  ResponseMessage,
  Token,
  Error,
} from "provider/models";

function* getAgencyInfoCall({ payload }: GetAgencyInfoAction) {
  try {
    const data = yield getAgencyInfoApi(payload);

    yield put({
      type: GET_AGENCY_INFO_SUCCESS,
      payload: {
        agency: data.user,
      },
    });
    // yield put(showModal(ModalType.Success, "Update Successfully"));
  } catch (error) {
    // yield put(showModal(ModalType.Error, error));
  }
}

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

function* updateAgencyInfoCall({ payload }: UpdateAgencyInfoAction) {
  try {
    if (payload.id) {
      const data: SimpleResponse<string> = yield updateAgencyInfoApi(
        payload.id,
        payload
      );
      if ((data as Error).error) {
        yield put(
          showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
        );
      } else {
        yield put(
          showModal(
            ModalType.Success,
            getSuccessMessage((data as ResponseMessage<string>).message)
          )
        );
      }
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* updateAddressInfo({ payload }: UpdateAddressInfoAction) {
  try {
    const data: SimpleResponse<string> = yield updateAddressInfoApi(
      payload.id,
      payload.agencyId,
      payload.data
    );
    if ((data as Error).error) {
      yield put(
        showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
      );
    } else {
      yield put(
        showModal(
          ModalType.Success,
          getSuccessMessage((data as ResponseMessage<string>).message)
        )
      );
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

export function* userSaga() {
  yield takeLatest(GET_AGENCY_INFO, getAgencyInfoCall);
  yield takeLatest(GET_USERS, getUsers);
  yield takeLatest(UPDATE_AGENCY_INFO, updateAgencyInfoCall);
  yield takeLatest(UPDATE_ADDRESS_INFO, updateAddressInfo);
}
