import { NewUserInfo } from "provider/models";
export const CLIENT_SIGNUP = "CLIENT.SIGNUP";
export const CLIENT_SIGNUP_SUCCESS = "CLIENT.SIGNUP_SUCCESS";
export const CLIENT_SIGNUP_FAILURE = "CLIENT.SIGNUP_FAILURE";

export interface ClientSignupAction {
  type: typeof CLIENT_SIGNUP;
  payload: NewUserInfo;
}

interface ClientSignupSuccessAction {
  type: typeof CLIENT_SIGNUP_SUCCESS;
}

interface ClientSignupFailureAction {
  type: typeof CLIENT_SIGNUP_FAILURE;
}

export const clientSignup = (singupInfo: NewUserInfo): ClientSignupAction => ({
  type: CLIENT_SIGNUP,
  payload: singupInfo,
});

export const clientSignupFailure = (): ClientSignupFailureAction => ({
  type: CLIENT_SIGNUP_FAILURE,
});

export const clientSignupSuccess = (): ClientSignupSuccessAction => ({
  type: CLIENT_SIGNUP_SUCCESS,
});
