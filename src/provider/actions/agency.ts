import { Agency } from "provider/models";
export const GET_AGENCY_INFO = "GET_AGENCY_INFO";
export const GET_AGENCY_INFO_SUCCESS = "GET_AGENCY_INFO_SUCCESS";
export const GET_AGENCY_INFO_FAILURE = "GET_AGENCY_INFO_FAILURE";
export const UPDATE_AGENCY_INFO = "UPDATE_AGENCY_INFO";
export const UPDATE_AGENCY_INFO_SUCCESS = "UPDATE_AGENCY_INFO_SUCCESS";
export const UPDATE_AGENCY_INFO_FAILURE = "UPDATE_AGENCY_INFO_FAILURE";

export interface GetAgencyInfoAction {
  type: typeof GET_AGENCY_INFO;
  payload: string;
}

interface GetAgencyInfoSuccessAction {
  type: typeof GET_AGENCY_INFO_SUCCESS;
  result: any;
}

interface GetAgencyInfoFailureAction {
  type: typeof GET_AGENCY_INFO_FAILURE;
}

export const getAgencyInfo = (payload: string): GetAgencyInfoAction => ({
  type: GET_AGENCY_INFO,
  payload,
});

export const getAgencyInfoSuccess = (
  result: boolean
): GetAgencyInfoSuccessAction => ({
  type: GET_AGENCY_INFO_SUCCESS,
  result,
});

export const getAgencyInfoFailure = (): GetAgencyInfoFailureAction => ({
  type: GET_AGENCY_INFO_FAILURE,
});

export interface UpdateAgencyInfoAction {
  type: typeof UPDATE_AGENCY_INFO;
  payload: Agency;
}

interface UpdateAgencyInfoSuccessAction {
  type: typeof UPDATE_AGENCY_INFO_SUCCESS;
  result: boolean;
}

interface UpdateAgencyInfoFailureAction {
  type: typeof UPDATE_AGENCY_INFO_FAILURE;
}

export const updateAgencyInfo = (payload: Agency): UpdateAgencyInfoAction => ({
  type: UPDATE_AGENCY_INFO,
  payload,
});

export const updateAgencyInfoSuccess = (
  result: boolean
): UpdateAgencyInfoSuccessAction => ({
  type: UPDATE_AGENCY_INFO_SUCCESS,
  result,
});

export const updateAgencyInfoFailure = (): UpdateAgencyInfoFailureAction => ({
  type: UPDATE_AGENCY_INFO_FAILURE,
});
