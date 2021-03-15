import {
  GetAgencyInfoAction,
  GET_AGENCY_INFO,
  GET_AGENCY_INFO_SUCCESS,
  GET_USERS,
  GET_USERS_SUCCESS,
  ModalType,
  showModal,
  UpdateAddressInfoAction,
  UpdateAgencyInfoAction,
  UPDATE_ADDRESS_INFO,
  UPDATE_AGENCY_INFO
} from "provider/actions";
import { retailersSlice } from "provider/actions/slice/retailer";
import {
  getAgencyInfoApi,
  getRetailersApi,
  getUsersApi,
  updateAddressInfoApi,
  updateAgencyInfoApi
} from "provider/apis";
import { Agency, SimpleResponse, User } from "provider/models";
import { put, takeLatest } from "redux-saga/effects";
import { handleSimpleResponseFromAPI } from "./helper";

function* getAgencyInfoCall({ payload }: GetAgencyInfoAction) {
  try {
    const data = yield getAgencyInfoApi(payload);

    yield put({
      type: GET_AGENCY_INFO_SUCCESS,
      payload: {
        agency: data.user
      }
    });
  } catch (error) {}
}

function* getUsers() {
  try {
    const data = yield getUsersApi();

    yield put({
      type: GET_USERS_SUCCESS,
      payload: {
        users: data.users.map((item: any) => User.fromApi(item))
      }
    });
  } catch (error) {}
}

function* updateAgencyInfoCall({ payload }: UpdateAgencyInfoAction) {
  try {
    if (payload.id) {
      const data: SimpleResponse<string> = yield updateAgencyInfoApi(
        payload.id,
        payload
      );
      yield handleSimpleResponseFromAPI(data);
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
    yield handleSimpleResponseFromAPI(data);
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* getRetailerCall({ payload }: any) {
  try {
    const data = yield getRetailersApi(payload);

    yield put({
      type: retailersSlice.actions.getSuccess,
      payload: {
        list: data.retailers.entities.map((item: any) => Agency.fromApi(item)),
        hasNext: data.retailers.hasNextPage
      }
    });
  } catch (error) {}
}

export function* userSaga() {
  yield takeLatest(GET_AGENCY_INFO, getAgencyInfoCall);
  yield takeLatest(GET_USERS, getUsers);
  yield takeLatest(retailersSlice.actions.getRetailers, getRetailerCall);

  yield takeLatest(UPDATE_AGENCY_INFO, updateAgencyInfoCall);
  yield takeLatest(UPDATE_ADDRESS_INFO, updateAddressInfo);
}
