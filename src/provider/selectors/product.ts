import { createSelector } from "reselect";
import { AppState } from "provider/reducer";

export const addingProductSelector = (state: AppState) => state.products;

export const getAddingProductImage = createSelector(
  addingProductSelector,
  (item) => item.addingImage
);

export const getProductList = createSelector(
  addingProductSelector,
  (productList) => productList.items
);

export const getUpdatingProduct = createSelector(
  addingProductSelector,
  (product) => product.updatingItem
);
