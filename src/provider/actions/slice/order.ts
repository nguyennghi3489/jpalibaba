import { createSlice } from "@reduxjs/toolkit";
import { OrderInfo } from "provider/models";

export interface OrderState {
  processInfo: OrderInfo;
}


export const orderInitialState: OrderState = {
  processInfo: {} as OrderInfo,
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
  },
});

export default orderSlice.reducer;
