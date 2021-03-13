import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Address } from "provider/models";

export interface State {
  addresses: Address[];
  defaultAddressId: string | null;
}

export const initialState: State = {
  addresses: [],
  defaultAddressId: null,
};

export const addressSlice = createSlice({
  name: "addresses",
  initialState: initialState,
  reducers: {
    getAddresses: {
      reducer() {},
      prepare() {
        return { payload: null };
      },
    },
    renderAddresses: {
      reducer(state, { payload }: PayloadAction<Address[]>) {
        state.addresses = payload;
      },
      prepare(addresses: Address[]) {
        return { payload: addresses };
      },
    },
    createAddress: {
      reducer() {},
      prepare(address: Address) {
        return { payload: address };
      },
    },
    createAddressSuccessfully: {
      reducer(state, { payload }: PayloadAction<Address>) {
        state.addresses = [...state.addresses, payload];
      },
      prepare(newAddress: Address) {
        return { payload: newAddress };
      },
    },
  },
});
export default addressSlice.reducer;
