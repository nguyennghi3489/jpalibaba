import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Campaign, ProcessInfo } from "provider/models";

export interface OrderState {
  processInfo: ProcessInfo;
}

export const orderInitialState: OrderState = {
  processInfo: {} as ProcessInfo,
};

export const orderSlice = createSlice({
  name: "order",
  initialState: orderInitialState,
  reducers: {
    addToProcess: {
      reducer(state: OrderState, data: PayloadAction<ProcessInfo>) {
        state.processInfo = data.payload;
      },
      prepare(data: ProcessInfo) {
        return { payload: data };
      },
    },
  },
});

export default orderSlice.reducer;
