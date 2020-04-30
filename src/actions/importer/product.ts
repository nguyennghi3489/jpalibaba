import { Product } from "models";

export const ADD_PRODUCT = "IMPORTER.EXPORT_ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "IMPORTER.EXPORT_ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "IMPORTER.EXPORT_ADD_PRODUCT_FAILURE";

export interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface AddProductSuccessAction {
  type: typeof ADD_PRODUCT_SUCCESS;
  result: boolean;
}

interface AddProductFailureAction {
  type: typeof ADD_PRODUCT_FAILURE;
}

export const addProduct = (payload: Product): AddProductAction => ({
  type: ADD_PRODUCT,
  payload,
});

export const addProductSuccess = (
  result: boolean
): AddProductSuccessAction => ({
  type: ADD_PRODUCT_SUCCESS,
  result,
});

export const addProductFailure = (): AddProductFailureAction => ({
  type: ADD_PRODUCT_FAILURE,
});
