import { AppState } from "provider/reducer";
import { createSelector } from "reselect";

export const getCampaignsSelector = (state: AppState) => state.campaigns;

export const getCampaignListSelector = createSelector(
  getCampaignsSelector,
  (campaignList) => campaignList.items
);

export const getPublicCampaignListSelector = createSelector(
  getCampaignsSelector,
  (campaignList) => campaignList.publicItems
);

export const getAdminCampaignsSelector = (state: AppState) =>
  state.adminCampaigns;

export const getAdminCampaignListSelector = createSelector(
  getAdminCampaignsSelector,
  (campaignList) => campaignList.list
);
