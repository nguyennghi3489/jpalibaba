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
      reducer(state, payload: PayloadAction<{ agencyId: string }>) {},
      prepare(agencyId: string) {
        return { payload: { agencyId } };
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
  },
});
export default addressSlice.reducer;
