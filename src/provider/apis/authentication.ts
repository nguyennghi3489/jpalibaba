import { callApi, loginUrl, forgotPasswordUrl, signOutUrl } from "./";
interface AutResponse {
  jwt: string;
}

export const authenticateApi = (
  username: string,
  password: string
): Promise<any> => {
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

export const logoutApi = (): Promise<any> => {
  return callApi("POST", signOutUrl, {});
};

export const recheckTokenApi = (token: string): Promise<boolean> => {
  const mockupPromise = Promise.resolve(true);

  return mockupPromise;
};
