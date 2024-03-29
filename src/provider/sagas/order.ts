import { PayloadAction } from "@reduxjs/toolkit";
import { forwardTo } from "helpers";
import {
  hideModal,
  ModalType,
  orderSlice,
  OrderUpdateRequest,
  showModal,
} from "provider/actions";
import {
  createOrderApi,
  getImporterOrdersApi,
  getRetailerOrdersApi,
  updateOrderStatusApi,
} from "provider/apis";
import { OrderDetail, OrderInfo, OrderResponse } from "provider/models";
import { getAgencyIdSelector } from "provider/selectors";
import { put, select, takeLatest } from "redux-saga/effects";
import { appUrl } from "routing";

function* createOrderCall({ payload }: PayloadAction<OrderInfo>) {
  try {
    yield put(showModal(ModalType.Loading, ""));
    const agencyId = yield select(getAgencyIdSelector);
    const data = yield createOrderApi(payload, agencyId);
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

function* getRetailerOrdersCall({ payload }: PayloadAction<string>) {
  try {
    yield put(showModal(ModalType.Loading, ""));
    const agencyId = yield select(getAgencyIdSelector);
    const data = yield getRetailerOrdersApi(agencyId);
    const orders = data.orders.entities.map((item: OrderResponse) =>
      OrderDetail.fromApi(item)
    );
    yield put(orderSlice.actions.getOrdersSuccess(orders));
    yield put(hideModal());
  } catch (error) {
    yield put(
      showModal(
        ModalType.Error,
        `Can't get orders list at this time. Please refresh your browser and try again`
      )
    );
  }
}

function* getImporterOrdersCall({ payload }: PayloadAction<string>) {
  try {
    yield put(showModal(ModalType.Loading, ""));
    const agencyId = yield select(getAgencyIdSelector);
    const data = yield getImporterOrdersApi(agencyId);
    const orders = data.orders.entities.map((item: OrderResponse) =>
      OrderDetail.fromApi(item)
    );
    yield put(orderSlice.actions.getOrdersSuccess(orders));
    yield put(hideModal());
  } catch (error) {
    yield put(
      showModal(
        ModalType.Error,
        `Can't get orders list at this time. Please refresh your browser and try again`
      )
    );
  }
}

function* updateOrderCall({ payload }: PayloadAction<OrderUpdateRequest>) {
  try {
    yield put(showModal(ModalType.Loading, ""));
    const result = yield updateOrderStatusApi(payload.orderId, payload.status);
    yield put(hideModal());
  } catch (error) {
    yield put(
      showModal(
        ModalType.Error,
        `Can't update order at this time. Please refresh your browser and try again`
      )
    );
  }
}

export function* orderSaga() {
  yield takeLatest(orderSlice.actions.createOrder, createOrderCall);
  yield takeLatest(orderSlice.actions.getRetailerOrders, getRetailerOrdersCall);
  yield takeLatest(orderSlice.actions.getImporterOrders, getImporterOrdersCall);
  yield takeLatest(orderSlice.actions.updateOrder, updateOrderCall);
}
