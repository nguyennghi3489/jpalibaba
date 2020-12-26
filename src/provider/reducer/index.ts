import {
  adminCampaignReducer,
  AdminCampaignState,
  initialPublicCampaign,
  initialState as adminCampaignsInitialState,
  publicCampaignReducer,
  PublicCampaignState,
} from "provider/actions";
import {
  initialState as retailersInitialState,
  retailersReducer,
  RetailersState,
} from "provider/actions/slice/retailer";
import { combineReducers } from "redux";
import {
  account,
  AccountGlobalState,
  initialState as accountInitialState,
} from "./account";
import {
  authentication,
  AuthenticationGlobalState,
  initialState as authenticationInitialState,
} from "./authentication";
import {
  CampaignGlobalState,
  campaigns,
  initialState as campaignsInitialState,
} from "./campaign";
import {
  gallery,
  GalleryState,
  initialState as galleryInitialState,
} from "./gallery";
import {
  initialState as modalInitialState,
  modal,
  ModalGlobalState,
} from "./modal";
import {
  initialState as productsInitialState,
  ProductGlobalState,
  products,
} from "./product";
import {
  initialState as userInitialState,
  UserGlobalState,
  users,
} from "./users";
import {
  initialState as verifyMailInitialState,
  verifyMail,
  VerifyMailGlobalState,
} from "./verifyMail";

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
  verifyMail: VerifyMailGlobalState;
  gallery: GalleryState;
  adminCampaigns: AdminCampaignState;
  retailers: RetailersState;
  publicCampaigns: PublicCampaignState;
}

const initialState: AppState = {
  users: userInitialState,
  account: accountInitialState,
  authentication: authenticationInitialState,
  products: productsInitialState,
  modal: modalInitialState,
  campaigns: campaignsInitialState,
  verifyMail: verifyMailInitialState,
  gallery: galleryInitialState,
  adminCampaigns: adminCampaignsInitialState,
  publicCampaigns: initialPublicCampaign,
  retailers: retailersInitialState,
};

const appReducer = combineReducers({
  account,
  authentication,
  modal,
  users,
  products,
  campaigns,
  verifyMail,
  gallery,
  adminCampaigns: adminCampaignReducer,
  retailers: retailersReducer,
  publicCampaigns: publicCampaignReducer,
});

const rootReducer = (state: AppState = initialState, action: any): AppState => {
  if (action.type === "LOGOUT") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
