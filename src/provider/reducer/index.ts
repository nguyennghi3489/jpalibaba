import { combineReducers } from "redux";
import {
  modal,
  initialState as modalInitialState,
  ModalGlobalState,
} from "./modal";
import {
  account,
  initialState as accountInitialState,
  AccountGlobalState,
} from "./account";
import {
  authentication,
  initialState as authenticationInitialState,
  AuthenticationGlobalState,
} from "./authentication";
import {
  users,
  initialState as userInitialState,
  UserGlobalState,
} from "./users";
import {
  products,
  initialState as productsInitialState,
  ProductGlobalState,
} from "./product";

export interface AddingProduct {
  image: string;
}

export interface AppState {
  users: UserGlobalState;
  account: AccountGlobalState;
  authentication: AuthenticationGlobalState;
  modal: ModalGlobalState;
  products: ProductGlobalState;
}

const initialState: AppState = {
  users: userInitialState,
  account: accountInitialState,
  authentication: authenticationInitialState,
  products: productsInitialState,
  modal: modalInitialState,
};

const appReducer = combineReducers({
  account,
  authentication,
  modal,
  users,
  products,
});

const rootReducer = (state: AppState = initialState, action: any): AppState => {
  if (action.type === "LOGOUT") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
