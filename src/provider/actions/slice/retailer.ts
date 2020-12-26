import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Agency } from "provider/models";

export interface RetailersState {
  list: Agency[];
  hasNext: boolean;
}

export const initialState: RetailersState = {
  list: [],
  hasNext: false,
};

interface SuccessData {
  list: Agency[];
  hasNext: boolean;
}

export const retailersSlice = createSlice({
  name: "retailers",
  initialState: initialState,
  reducers: {
    getRetailers: {
      reducer(state) {},
      prepare(offset: number, limit: number) {
        return { payload: { offset, limit } };
      },
    },
    getSuccess: {
      reducer(state, action: PayloadAction<SuccessData>) {
        if (state.list.length > 0 && action.payload.list.length > 0) {
          if (state.list[0].id === action.payload.list[0].id) {
            return;
          } else {
            state.list = [...state.list, ...action.payload.list];
            state.hasNext = action.payload.hasNext;
          }
        }
        if (state.list.length === 0) {
          state.list = action.payload.list;
          state.hasNext = action.payload.hasNext;
        }
      },
      prepare(list: Agency[], hasNext: boolean) {
        return { payload: { list, hasNext } };
      },
    },
  },
});

export const retailersReducer = retailersSlice.reducer;

export const getRetailersAction = (offset: number, limit: number) => {
  return retailersSlice.actions.getRetailers(offset, limit);
};
