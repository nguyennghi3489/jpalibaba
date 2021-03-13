import { AppState } from "provider/reducer";
import { createSelector } from "reselect";

export const getAddressStateSelector = (state: AppState) => state.address;

export const getAddressListSelector = createSelector(
  getAddressStateSelector,
  (state) => state.addresses
);
