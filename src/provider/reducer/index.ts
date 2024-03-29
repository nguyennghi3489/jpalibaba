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

import authentication, {
  initialState as authenticationInitialState,
  AuthenticationState,
} from "provider/actions/slice/authentication";
import { combineReducers } from "redux";
import {
  account,
  AccountGlobalState,
  initialState as accountInitialState,
} from "./account";
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
import order, {
  orderInitialState,
  OrderState,
} from "provider/actions/slice/order";
import address, {
  initialState as addressInitialState,
  State as AddressState,
} from "provider/actions/slice/addresses";
import notification, {
  initialState as notificationInitialState,
  State as NotificationState,
} from "provider/actions/slice/notification";
import mailSetting, {
  mailSettingsInitialState,
  MailSettingState,
} from "provider/actions/slice/mail-setting";

export interface AddingProduct {
  image: string;
}

export interface AppState {
  users: UserGlobalState;
  account: AccountGlobalState;
  authentication: AuthenticationState;
  modal: ModalGlobalState;
  products: ProductGlobalState;
  campaigns: CampaignGlobalState;
  verifyMail: VerifyMailGlobalState;
  gallery: GalleryState;
  adminCampaigns: AdminCampaignState;
  retailers: RetailersState;
  publicCampaigns: PublicCampaignState;
  order: OrderState;
  address: AddressState;
  notification: NotificationState;
  mailSetting: MailSettingState;
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
  order: orderInitialState,
  address: addressInitialState,
  notification: notificationInitialState,
  mailSetting: mailSettingsInitialState,
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
  order,
  address,
  notification,
  mailSetting,
});

const rootReducer = (state: AppState = initialState, action: any): AppState => {
  if (action.type === "LOGOUT") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
