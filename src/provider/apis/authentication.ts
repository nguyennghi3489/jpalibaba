import {
  callApi,
  loginUrl,
  forgotPasswordUrl,
  signOutUrl,
  resetPasswordUrl,
} from "./";
import { SimpleResponse } from "provider/models";

import { ResetPasswordInfo } from "provider/actions";
interface AutResponse {
  jwt: string;
}

export const authenticateApi = (
  username: string,
  password: string
): Promise<SimpleResponse<string>> => {
  return callApi("POST", loginUrl, {
    email: username,
    password: password,
    rememberMe: false,
  });
};

export const forgotPasswordApi = (username: string): Promise<any> => {
  return callApi("POST", forgotPasswordUrl, {
    email: username,
  });
};

export const resetPasswordApi = (payload: ResetPasswordInfo): Promise<any> => {
  const { password, confirmPassword, token } = payload;
  return callApi("POST", resetPasswordUrl + token, {
    password,
    confirmPassword,
  });
};

export const logoutApi = (): Promise<any> => {
  return callApi("POST", signOutUrl, {});
};

export const recheckTokenApi = (token: string): Promise<boolean> => {
  const mockupPromise = Promise.resolve(true);

  return mockupPromise;
};
