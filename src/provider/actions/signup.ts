import { NewUserInfo } from "provider/models";
export const CLIENT_SIGNUP = "CLIENT.SIGNUP";
export const CLIENT_SIGNUP_SUCCESS = "CLIENT.SIGNUP_SUCCESS";
export const CLIENT_SIGNUP_FAILURE = "CLIENT.SIGNUP_FAILURE";
export const VERIFY_USER_MAIL = "CLIENT.VERIFY_MAIL";
export const VERIFY_USER_MAIL_SUCCESS = "CLIENT.VERIFY_MAIL_SUCCESS";
export const VERIFY_USER_MAIL_FAILURE = "CLIENT.VERIFY_MAIL_FAILURE";

export interface VerifyMailAction {
  type: typeof VERIFY_USER_MAIL;
  payload: string;
}

interface VerifyMailSuccessAction {
  type: typeof VERIFY_USER_MAIL_SUCCESS;
}

interface VerifyMailFailureAction {
  type: typeof VERIFY_USER_MAIL_FAILURE;
}

export const verifyMail = (token: string): VerifyMailAction => ({
  type: VERIFY_USER_MAIL,
  payload: token,
});

export const verifyMailFailure = (): VerifyMailFailureAction => ({
  type: VERIFY_USER_MAIL_FAILURE,
});

export const verifyMailSuccess = (): VerifyMailSuccessAction => ({
  type: VERIFY_USER_MAIL_SUCCESS,
});

export interface ClientSignupAction {
  type: typeof CLIENT_SIGNUP;
  payload: { singupInfo: NewUserInfo; admin: boolean };
}

interface ClientSignupSuccessAction {
  type: typeof CLIENT_SIGNUP_SUCCESS;
}

interface ClientSignupFailureAction {
  type: typeof CLIENT_SIGNUP_FAILURE;
}

export const clientSignup = (
  singupInfo: NewUserInfo,
  admin: boolean
): ClientSignupAction => ({
  type: CLIENT_SIGNUP,
  payload: { singupInfo, admin },
});

export const clientSignupFailure = (): ClientSignupFailureAction => ({
  type: CLIENT_SIGNUP_FAILURE,
});

export const clientSignupSuccess = (): ClientSignupSuccessAction => ({
  type: CLIENT_SIGNUP_SUCCESS,
});
