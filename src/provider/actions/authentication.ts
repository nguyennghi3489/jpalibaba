export const AUTHENTICATE = "AUTHENTICATE";

export const RECHECK_TOKEN = "RECHECK_TOKEN";
export const LOGOUT = "LOGOUT";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAILURE = "AUTHENTICATE_FAILURE";

interface LoginInfo {
  username: string;
  password: string;
}

export interface ResetPasswordInfo {
  password: string;
  confirmPassword: string;
  token: string;
}

interface RecheckTokenInfo {
  token: string;
  location: string;
}

export interface ResetPasswordAction {
  type: typeof RESET_PASSWORD;
  payload: ResetPasswordInfo;
}

export interface ForgotPasswordAction {
  type: typeof FORGOT_PASSWORD;
  payload: string;
}

export interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: LoginInfo;
}

export interface RecheckTokenAction {
  type: typeof RECHECK_TOKEN;
  payload: RecheckTokenInfo;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export const authenticate = (
  username: string,
  password: string
): AuthenticateAction => ({
  type: AUTHENTICATE,
  payload: {
    username,
    password,
  },
});

export const recheckToken = (
  token: string,
  location: string
): RecheckTokenAction => ({
  type: RECHECK_TOKEN,
  payload: {
    token,
    location,
  },
});

export const resetPassword = (
  password: string,
  confirmPassword: string,
  token: string
): ResetPasswordAction => ({
  type: RESET_PASSWORD,
  payload: {
    password,
    confirmPassword,
    token,
  },
});

export const forgotPassword = (email: string): ForgotPasswordAction => ({
  type: FORGOT_PASSWORD,
  payload: email,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
