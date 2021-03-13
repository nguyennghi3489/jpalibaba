import { PayloadAction } from "@reduxjs/toolkit";
import { ModalType, showModal } from "provider/actions";
import { addressSlice } from "provider/actions/slice/addresses";
import { createAddressApi, getAddressListApi } from "provider/apis/address";
import { put, select, takeLatest } from "redux-saga/effects";
import { AUTHENTICATE_SUCCESS } from "provider/actions";
import { Address } from "provider/models";
import { getAgencyIdSelector } from "provider/selectors";

function* getAddressListCall() {
  try {
    const agencyId = yield select(getAgencyIdSelector);
    const data = yield getAddressListApi(agencyId);

    const addressList = data.shippingAddresses.map((item: any) =>
      Address.fromApi(item)
    );
    yield put(addressSlice.actions.renderAddresses(addressList));
  } catch (error) {
    yield put(
      showModal(
        ModalType.Error,
        `Can't get address list. Please Refresh your browser`
      )
    );
  }
}

function* createAddressCall({ payload }: PayloadAction<Address>) {
  try {
    const agencyId = yield select(getAgencyIdSelector);
    const data = yield createAddressApi(agencyId, payload);
    const newAddress = { ...data, ...payload };
    yield put(addressSlice.actions.createAddressSuccessfully(newAddress));
  } catch (error) {
    yield put(
      showModal(
        ModalType.Error,
        `Can't create address list. Please Refresh your browser and create again`
      )
    );
  }
}
export function* addressSaga() {
  yield takeLatest(addressSlice.actions.getAddresses, getAddressListCall);
  yield takeLatest(addressSlice.actions.createAddress, createAddressCall);
}
