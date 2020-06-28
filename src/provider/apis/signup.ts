import { NewUserInfo, SimpleResponse } from "provider/models";
import { callApi, signupUrl, verifyMailUrl } from "./";

interface SignupResponse {
  result: boolean;
}

export const clientSignupApi = (
  signupInfo: NewUserInfo
): Promise<SignupResponse> => {
  return callApi("POST", signupUrl, signupInfo);
};

export const verifyMailApi = (
  token: string
): Promise<SimpleResponse<string>> => {
  return callApi("POST", verifyMailUrl + token, {});
};
