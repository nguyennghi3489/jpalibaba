import { combineReducers } from "redux";
import {
  GET_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  ADD_IMAGE_SUCCESS,
  PICK_UPDATE_PRODUCT,
  GetProductsSuccessAction,
  DeleteProductSuccessAction,
  PickUpdateProductsAction,
} from "provider/actions";
import { Product } from "provider/models";

export interface ProductGlobalState {
  items: Product[];
  addingImage: string;
  updatingItem: Product | null;
}

export const initialState: ProductGlobalState = {
  items: [],
  addingImage: "",
  updatingItem: null,
};

export const items = (
  state: Product[] = initialState.items,
  action: GetProductsSuccessAction | DeleteProductSuccessAction
): Product[] => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.result;
    case DELETE_PRODUCT_SUCCESS: {
      return state.filter((item) => item.id != action.payload);
    }
    default:
      return state;
  }
};

export const addingImage = (
  state = initialState.addingImage,
  action: any
): string => {
  switch (action.type) {
    case ADD_IMAGE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const updatingItem = (
  state = initialState.updatingItem,
  action: PickUpdateProductsAction
): Product | null => {
  switch (action.type) {
    case PICK_UPDATE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
export const products = combineReducers({
  items,
  addingImage,
  updatingItem,
});
