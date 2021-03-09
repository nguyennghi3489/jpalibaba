import { PayloadAction } from "@reduxjs/toolkit";
import { ModalType, showModal } from "provider/actions";
import { addressSlice } from "provider/actions/slice/addresses";
import { getAddressListApi } from "provider/apis/address";
import { put, takeLatest } from "redux-saga/effects";
import { AUTHENTICATE_SUCCESS } from "provider/actions";
import { Address } from "provider/models";

function* getAddressListCall({ payload }: PayloadAction<{ agencyId: string }>) {
  try {
    const data = yield getAddressListApi(payload.agencyId);

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

export function* addressSaga() {
  yield takeLatest(addressSlice.actions.getAddresses, getAddressListCall);
}
