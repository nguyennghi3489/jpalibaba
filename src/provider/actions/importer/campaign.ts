import { RequestCampaign } from "provider/models";
import { Campaign } from "provider/models/campaign";

export const ADD_CAMPAIGN = "IMPORTER.EXPORT_ADD_CAMPAIGN";
export const ADD_CAMPAIGN_SUCCESS = "IMPORTER.EXPORT_ADD_CAMPAIGN_SUCCESS";
export const ADD_CAMPAIGN_FAILURE = "IMPORTER.EXPORT_ADD_CAMPAIGN_FAILURE";
export const DELETE_CAMPAIGN = "IMPORTER.DELETE_CAMPAIGN";
export const DELETE_CAMPAIGN_SUCCESS = "IMPORTER.DELETE_CAMPAIGN_SUCCESS";
export const DELETE_CAMPAIGN_FAILURE = "IMPORTER.DELETE_CAMPAIGN_FAILURE";
export const GET_CAMPAIGN = "IMPORTER.GET_CAMPAIGN";
export const GET_CAMPAIGN_SUCCESS = "IMPORTER.GET_CAMPAIGN_SUCCESS";
export const GET_CAMPAIGN_FAILURE = "IMPORTER.GET_CAMPAIGN_FAILURE";
export const GET_PUBLIC_CAMPAIGN = "IMPORTER.GET_PUBLIC_CAMPAIGN";
export const GET_PUBLIC_CAMPAIGN_SUCCESS =
  "IMPORTER.GET_PUBLIC_CAMPAIGN_SUCCESS";
export const GET_PUBLIC_CAMPAIGN_FAILURE =
  "IMPORTER.GET_PUBLIC_CAMPAIGN_FAILURE";

export interface GetPublicCampaignAction {
  type: typeof GET_PUBLIC_CAMPAIGN;
}

export interface GetPublicCampaignSuccessAction {
  type: typeof GET_PUBLIC_CAMPAIGN_SUCCESS;
  result: Campaign[];
}

interface GetPublicCampaignFailureAction {
  type: typeof GET_PUBLIC_CAMPAIGN_FAILURE;
}

export const getPublicCampaigns = (): GetPublicCampaignAction => ({
  type: GET_PUBLIC_CAMPAIGN,
});

export const getPublicCampaignsSuccess = (
  result: Campaign[]
): GetPublicCampaignSuccessAction => ({
  type: GET_PUBLIC_CAMPAIGN_SUCCESS,
  result,
});

export const getPublicCampaignsFailure = (): GetPublicCampaignFailureAction => ({
  type: GET_PUBLIC_CAMPAIGN_FAILURE,
});

export interface GetCampaignAction {
  type: typeof GET_CAMPAIGN;
  payload: string;
}

export interface GetCampaignSuccessAction {
  type: typeof GET_CAMPAIGN_SUCCESS;
  result: Campaign[];
}

interface GetCampaignFailureAction {
  type: typeof GET_CAMPAIGN_FAILURE;
}

export const getCampaigns = (payload: string): GetCampaignAction => ({
  type: GET_CAMPAIGN,
  payload,
});

export const getCampaignsSuccess = (
  result: Campaign[]
): GetCampaignSuccessAction => ({
  type: GET_CAMPAIGN_SUCCESS,
  result,
});

export const getCampaignsFailure = (): GetCampaignFailureAction => ({
  type: GET_CAMPAIGN_FAILURE,
});

export interface AddCampaignAction {
  type: typeof ADD_CAMPAIGN;
  payload: RequestCampaign;
}

interface AddCampaignSuccessAction {
  type: typeof ADD_CAMPAIGN_SUCCESS;
  result: boolean;
}

interface AddCampaignFailureAction {
  type: typeof ADD_CAMPAIGN_FAILURE;
}

export const addCampaign = (payload: RequestCampaign): AddCampaignAction => ({
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
