const AUTHENTICATE = "AUTHENTICATE";
const RECHECK_TOKEN = "RECHECK_TOKEN";
const LOGOUT = "LOGOUT";
const FORGOT_PASSWORD = "FORGOT_PASSWORD";

interface LoginInfo {
  username: string;
  password: string;
}

interface RecheckTokenInfo {
  token: string;
  location: string;
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

export const forgotPassword = (email: string): ForgotPasswordAction => ({
  type: FORGOT_PASSWORD,
  payload: email,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
