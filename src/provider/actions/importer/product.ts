import { Product, GetProductQuery } from "provider/models";

export const RESET_UPDATE_PRODUCT = "IMPORTER.RESET_UPDATE_PRODUCT";
export const ADD_PRODUCT = "IMPORTER.EXPORT_ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "IMPORTER.EXPORT_ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "IMPORTER.EXPORT_ADD_PRODUCT_FAILURE";
export const DELETE_PRODUCT = "IMPORTER.DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "IMPORTER.DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "IMPORTER.DELETE_PRODUCT_FAILURE";
export const IMPORT_PRODUCT = "IMPORTER.IMPORT_PRODUCT";
export const IMPORT_PRODUCT_SUCCESS = "IMPORTER.IMPORT_PRODUCT_SUCCESS";
export const IMPORT_PRODUCT_FAILURE = "IMPORTER.IMPORT_PRODUCT_FAILURE";
export const GET_PRODUCTS = "IMPORTER.GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "IMPORTER.GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "IMPORTER.GET_PRODUCTS_FAILURE";
export const UPDATE_PRODUCT = "IMPORTER.UPDATE_PRODUCT";
export const UPDATE_PRODUCT_SUCCESS = "IMPORTER.UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "IMPORTER.UPDATE_PRODUCT_FAILURE";

export const PICK_UPDATE_PRODUCT = "IMPORTER.PICK_UPDATE_PRODUCT";

export interface PickUpdateProductsAction {
  type: typeof PICK_UPDATE_PRODUCT;
  payload: Product;
}
export const pickUpdateProduct = (
  payload: Product
): PickUpdateProductsAction => ({
  type: PICK_UPDATE_PRODUCT,
  payload,
});

export interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  payload: GetProductQuery;
}

export interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  result: Product[];
}

interface GetProductsFailureAction {
  type: typeof GET_PRODUCTS_FAILURE;
}

export const resetUpdateProduct = () => ({
  type: RESET_UPDATE_PRODUCT,
});

export const getProducts = (payload: GetProductQuery): GetProductsAction => ({
  type: GET_PRODUCTS,
  payload,
});

export const getProductsSuccess = (
  result: Product[]
): GetProductsSuccessAction => ({
  type: GET_PRODUCTS_SUCCESS,
  result,
});

export const getProductsFailure = (): GetProductsFailureAction => ({
  type: GET_PRODUCTS_FAILURE,
});

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

export interface ImportProductAction {
  type: typeof IMPORT_PRODUCT;
  payload: File;
}

interface ImportProductSuccessAction {
  type: typeof IMPORT_PRODUCT_SUCCESS;
  result: boolean;
}

interface ImportProductFailureAction {
  type: typeof IMPORT_PRODUCT_FAILURE;
}

export const importProduct = (payload: File): ImportProductAction => ({
  type: IMPORT_PRODUCT,
  payload,
});

export const importProductSuccess = (
  result: boolean
): ImportProductSuccessAction => ({
  type: IMPORT_PRODUCT_SUCCESS,
  result,
});

export const importProductFailure = (): ImportProductFailureAction => ({
  type: IMPORT_PRODUCT_FAILURE,
});

export interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  payload: string;
}

export interface DeleteProductSuccessAction {
  type: typeof DELETE_PRODUCT_SUCCESS;
  payload: string;
}

interface DeleteProductFailureAction {
  type: typeof DELETE_PRODUCT_FAILURE;
}

export const deleteProduct = (payload: string): DeleteProductAction => ({
  type: DELETE_PRODUCT,
  payload,
});

export const deleteProductSuccess = (
  payload: string
): DeleteProductSuccessAction => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload,
});

export const deleteProductFailure = (): DeleteProductFailureAction => ({
  type: DELETE_PRODUCT_FAILURE,
});

export interface UpdateProductAction {
  type: typeof UPDATE_PRODUCT;
  payload: {
    product: Product;
    id: string;
  };
}

interface UpdateProductSuccessAction {
  type: typeof UPDATE_PRODUCT_SUCCESS;
  result: boolean;
}

interface UpdateProductFailureAction {
  type: typeof UPDATE_PRODUCT_FAILURE;
}

export const updateProduct = (
  product: Product,
  id: string
): UpdateProductAction => ({
  type: UPDATE_PRODUCT,
  payload: { product, id },
});

// export const updateProductSuccess = (
//   result: boolean
// ): AddProductSuccessAction => ({
//   type: UPDATE_PRODUCT_SUCCESS,
//   result,
// });

// export const updateProductFailure = (): UpdateProductFailureAction => ({
//   type: UPDATE_PRODUCT_FAILURE,
// });
