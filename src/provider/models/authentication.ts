export interface LoginInfo {
  username: string;
  password: string;
  redirectPage?: string;
}

export interface ResetPasswordInfo {
  password: string;
  confirmPassword: string;
  token: string;
}

export interface RecheckTokenInfo {
  token: string;
  location: string;
}

export interface AuthenticatedInfo {
  token: string;
  role: string;
  account: any;
}
