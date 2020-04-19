import { NewUserInfo } from "models";
interface SignupResponse {
  result: boolean;
}

export const clientSignupApi = (
  signupInfo: NewUserInfo
): Promise<SignupResponse> => {
  const mkData = {
    result: true,
  };
  const mockupPromise = Promise.resolve(mkData);

  return mockupPromise;
};
