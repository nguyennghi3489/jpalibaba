export const ACTIVE_USER = "ADMIN.ACTIVE_USER";
export const ACTIVE_USER_SUCCESS = "ADMIN.ACTIVE_USER_SUCCESS";
export const ACTIVE_USER_FAILURE = "ADMIN.ACTIVE_USER_FAILURE";

export interface ActiveUserAction {
  type: typeof ACTIVE_USER;
  payload: boolean;
}

interface ActiveUserSuccessAction {
  type: typeof ACTIVE_USER_SUCCESS;
  result: boolean;
}

interface ActiveUserFailureAction {
  type: typeof ACTIVE_USER_FAILURE;
}

export const activeUser = (payload: boolean): ActiveUserAction => ({
  type: ACTIVE_USER,
  payload,
});

export const activeUserSuccess = (
  result: boolean
): ActiveUserSuccessAction => ({
  type: ACTIVE_USER_SUCCESS,
  result,
});

export const activeUserFailure = (): ActiveUserFailureAction => ({
  type: ACTIVE_USER_FAILURE,
});
