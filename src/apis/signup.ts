import { SignupInfo } from "models";
interface SignupResponse {
  result: boolean;
}

export const clientSignupApi = (
  signupInfo: SignupInfo
): Promise<SignupResponse> => {
  const mkData = {
    result: true,
  };
  const mockupPromise = Promise.resolve(mkData);

  return mockupPromise;
};
