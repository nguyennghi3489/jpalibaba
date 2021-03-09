import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Campaign, OrderInfo } from "provider/models";

export interface OrderState {
  processInfo: OrderInfo;
}

type OrderInfoWithImporterId = OrderState & { importer: string };

export const orderInitialState: OrderState = {
  processInfo: {} as OrderInfo,
};

export const orderSlice = createSlice({
  name: "order",
  initialState: orderInitialState,
  reducers: {
    createOrder: {
      reducer(state: OrderState, data: PayloadAction<OrderInfoWithImporterId>) {
        // state.processInfo = data.payload;
      },
      prepare(data: OrderInfoWithImporterId) {
        return { payload: data };
      },
    },
  },
});

// const createOrder = createAsyncThunk(
//   "order/createOder",
//   async (data, thunkApi) => {}
// );

export default orderSlice.reducer;
