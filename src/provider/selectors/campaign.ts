import { createSelector } from "reselect";
import { AppState } from "provider/reducer";

export const getCampaignsSelector = (state: AppState) => state.campaigns;

export const getCampaignListSelector = createSelector(
  getCampaignsSelector,
  (campaignList) => campaignList.items
);

export const getPublicCampaignListSelector = createSelector(
  getCampaignsSelector,
  (campaignList) => campaignList.publicItems
);
