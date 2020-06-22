import { combineReducers } from "redux";
import {
  GET_CAMPAIGN_SUCCESS,
  GET_PUBLIC_CAMPAIGN_SUCCESS,
  GetPublicCampaignSuccessAction,
  GetCampaignSuccessAction,
} from "provider/actions";
import { Product } from "provider/models";
import { Campaign } from "provider/models/campaign";

export interface CampaignGlobalState {
  items: Campaign[];
  publicItems: Campaign[];
}

export const initialState: CampaignGlobalState = {
  items: [],
  publicItems: [],
};

export const items = (
  state: Campaign[] = initialState.items,
  action: GetCampaignSuccessAction
): Campaign[] => {
  switch (action.type) {
    case GET_CAMPAIGN_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

export const publicItems = (
  state: Campaign[] = initialState.publicItems,
  action: GetPublicCampaignSuccessAction
): Campaign[] => {
  switch (action.type) {
    case GET_PUBLIC_CAMPAIGN_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

export const campaigns = combineReducers({
  items,
  publicItems,
});
