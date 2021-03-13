import { PayloadAction } from "@reduxjs/toolkit";
import { forwardTo } from "helpers";
import { ModalType, orderSlice, showModal } from "provider/actions";
import { createOrderApi } from "provider/apis";
import { OrderInfo } from "provider/models";
import { getAgencyIdSelector } from "provider/selectors";
import { put, select, takeLatest } from "redux-saga/effects";
import { appUrl } from "routing";

function* createOrderCall({ payload }: PayloadAction<OrderInfo>) {
  try {
    yield put(showModal(ModalType.Loading, ""));
    const agencyId = yield select(getAgencyIdSelector);
    const data = yield createOrderApi(payload, agencyId);

    const newAddress = { ...data, ...payload };
    window.localStorage.removeItem("cart");
    yield put(
      showModal(
        ModalType.Success,
        `Your order is submitted successfully. Please check the order state at order page.`,
        () => {
          forwardTo(appUrl.retailerOrders);
        }
      )
    );
  } catch (error) {
    yield put(
      showModal(
        ModalType.Error,
        `Can't create order at this time. Please refresh your browser and create again`
      )
    );
  }
}

export function* orderSaga() {
  yield takeLatest(orderSlice.actions.createOrder, createOrderCall);
}
