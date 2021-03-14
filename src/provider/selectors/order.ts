import { AppState } from "provider/reducer";
import { createSelector } from "reselect";

export const getOrderState = (state: AppState) => state.order;

export const getOrderProcessInfoSelector = createSelector(
  getOrderState,
  gallery => gallery.processInfo
);

export const getOrderListSelector = createSelector(
  getOrderState,
  orderState => orderState.orders
);
