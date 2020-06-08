import { NewUserInfo } from "provider/models";
import { callApi, signupUrl } from "./";

interface SignupResponse {
  result: boolean;
}

export const clientSignupApi = (
  signupInfo: NewUserInfo
): Promise<SignupResponse> => {
  return callApi("POST", signupUrl, signupInfo);
};
