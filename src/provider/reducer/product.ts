import {
  ADD_IMAGE_SUCCESS,
  DeleteProductSuccessAction,
  DELETE_PRODUCT_SUCCESS,
  GetProductsSuccessAction,
  GET_PRODUCTS_SUCCESS,
  PICK_UPDATE_PRODUCT,
  RESET_UPDATE_PRODUCT,
} from "provider/actions";
import { Product } from "provider/models";
import { combineReducers } from "redux";

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
      return state.filter((item) => item.id !== action.payload);
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
    case RESET_UPDATE_PRODUCT:
      return initialState.addingImage;
    default:
      return state;
  }
};

export const updatingItem = (
  state = initialState.updatingItem,
  action: any
): Product | null => {
  switch (action.type) {
    case PICK_UPDATE_PRODUCT:
      return action.payload;
    case RESET_UPDATE_PRODUCT:
      return initialState.updatingItem;
    default:
      return state;
  }
};
export const products = combineReducers({
  items,
  addingImage,
  updatingItem,
});
