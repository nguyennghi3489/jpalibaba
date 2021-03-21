import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderInfo } from "provider/models";

export interface OrderState {
  processInfo: OrderInfo;
  orders: any;
}

export interface OrderUpdateRequest {
  orderId: string;
  status: number;
}

export const orderInitialState: OrderState = {
  processInfo: {} as OrderInfo,
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState: orderInitialState,
  reducers: {
    createOrder: {
      reducer() {},
      prepare(data: OrderInfo) {
        return { payload: data };
      },
    },
    getRetailerOrders: {
      reducer() {},
      prepare(data: string) {
        return { payload: data };
      },
    },
    getImporterOrders: {
      reducer() {},
      prepare(data: string) {
        return { payload: data };
      },
    },
    getOrdersSuccess: {
      reducer(state: OrderState, { payload }: PayloadAction<any>) {
        state.orders = payload;
      },
      prepare(data: any) {
        return { payload: data };
      },
    },
    updateOrder: {
      reducer() {},
      prepare(orderUpdateRequest: OrderUpdateRequest) {
        return { payload: orderUpdateRequest };
      },
    },
  },
});

export default orderSlice.reducer;
