export const GET_AGENCY_INFO = "GET_AGENCY_INFO";
export const GET_AGENCY_INFO_SUCCESS = "GET_AGENCY_INFO_SUCCESS";
export const GET_AGENCY_INFO_FAILURE = "GET_AGENCY_INFO_FAILURE";

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
