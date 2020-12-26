import { AppState } from "provider/reducer";
import { createSelector } from "reselect";

export const getCampaignsSelector = (state: AppState) => state.campaigns;
export const getPublicCampaignsSelector = (state: AppState) =>
  state.publicCampaigns;

export const getCampaignListSelector = createSelector(
  getCampaignsSelector,
  (campaignList) => campaignList.items
);

export const getPublicCampaignListSelector = createSelector(
  getPublicCampaignsSelector,
  (campaignList) => campaignList.list
);

export const getAdminCampaignsSelector = (state: AppState) =>
  state.adminCampaigns;

export const getAdminCampaignListSelector = createSelector(
  getAdminCampaignsSelector,
  (campaignList) => campaignList.list
);
