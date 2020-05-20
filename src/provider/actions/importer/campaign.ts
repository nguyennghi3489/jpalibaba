import { Campaign } from "provider/models";

export const ADD_CAMPAIGN = "IMPORTER.EXPORT_ADD_CAMPAIGN";
export const ADD_CAMPAIGN_SUCCESS = "IMPORTER.EXPORT_ADD_CAMPAIGN_SUCCESS";
export const ADD_CAMPAIGN_FAILURE = "IMPORTER.EXPORT_ADD_CAMPAIGN_FAILURE";
export const DELETE_CAMPAIGN = "IMPORTER.DELETE_CAMPAIGN";
export const DELETE_CAMPAIGN_SUCCESS = "IMPORTER.DELETE_CAMPAIGN_SUCCESS";
export const DELETE_CAMPAIGN_FAILURE = "IMPORTER.DELETE_CAMPAIGN_FAILURE";

export interface AddCampaignAction {
  type: typeof ADD_CAMPAIGN;
  payload: Campaign;
}

interface AddCampaignSuccessAction {
  type: typeof ADD_CAMPAIGN_SUCCESS;
  result: boolean;
}

interface AddCampaignFailureAction {
  type: typeof ADD_CAMPAIGN_FAILURE;
}

export const addCampaign = (payload: Campaign): AddCampaignAction => ({
  type: ADD_CAMPAIGN,
  payload,
});

export const addCampaignSuccess = (
  result: boolean
): AddCampaignSuccessAction => ({
  type: ADD_CAMPAIGN_SUCCESS,
  result,
});

export const addCampaignFailure = (): AddCampaignFailureAction => ({
  type: ADD_CAMPAIGN_FAILURE,
});

export interface DeleteCampaignAction {
  type: typeof DELETE_CAMPAIGN;
  payload: string;
}

interface DeleteCampaignSuccessAction {
  type: typeof DELETE_CAMPAIGN_SUCCESS;
  result: boolean;
}

interface DeleteCampaignFailureAction {
  type: typeof DELETE_CAMPAIGN_FAILURE;
}

export const deleteCampaign = (payload: string): DeleteCampaignAction => ({
  type: DELETE_CAMPAIGN,
  payload,
});

export const deleteCampaignSuccess = (
  result: boolean
): DeleteCampaignSuccessAction => ({
  type: DELETE_CAMPAIGN_SUCCESS,
  result,
});

export const deleteCampaignFailure = (): DeleteCampaignFailureAction => ({
  type: DELETE_CAMPAIGN_FAILURE,
});
