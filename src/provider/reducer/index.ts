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
import {
  campaigns,
  initialState as campaignsInitialState,
  CampaignGlobalState,
} from "./campaign";

export interface AddingProduct {
  image: string;
}

export interface AppState {
  users: UserGlobalState;
  account: AccountGlobalState;
  authentication: AuthenticationGlobalState;
  modal: ModalGlobalState;
  products: ProductGlobalState;
  campaigns: CampaignGlobalState;
}

const initialState: AppState = {
  users: userInitialState,
  account: accountInitialState,
  authentication: authenticationInitialState,
  products: productsInitialState,
  modal: modalInitialState,
  campaigns: campaignsInitialState,
};

const appReducer = combineReducers({
  account,
  authentication,
  modal,
  users,
  products,
  campaigns,
});

const rootReducer = (state: AppState = initialState, action: any): AppState => {
  if (action.type === "LOGOUT") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
