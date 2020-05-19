import { Product } from "provider/models";

export const ADD_PRODUCT = "IMPORTER.EXPORT_ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "IMPORTER.EXPORT_ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "IMPORTER.EXPORT_ADD_PRODUCT_FAILURE";
export const DELETE_PRODUCT = "IMPORTER.DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "IMPORTER.DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "IMPORTER.DELETE_PRODUCT_FAILURE";

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

export interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  payload: string;
}

interface DeleteProductSuccessAction {
  type: typeof DELETE_PRODUCT_SUCCESS;
  result: boolean;
}

interface DeleteProductFailureAction {
  type: typeof DELETE_PRODUCT_FAILURE;
}

export const deleteProduct = (payload: string): DeleteProductAction => ({
  type: DELETE_PRODUCT,
  payload,
});

export const deleteProductSuccess = (
  result: boolean
): DeleteProductSuccessAction => ({
  type: DELETE_PRODUCT_SUCCESS,
  result,
});

export const deleteProductFailure = (): DeleteProductFailureAction => ({
  type: DELETE_PRODUCT_FAILURE,
});
