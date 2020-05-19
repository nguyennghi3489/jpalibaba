import { NewUserInfo } from "provider/models";
interface SignupResponse {
  result: boolean;
}

export const clientSignupApi = (
  signupInfo: NewUserInfo
): Promise<SignupResponse> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};
