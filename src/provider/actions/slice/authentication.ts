import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthenticatedInfo,
  LoginInfo,
  RecheckTokenInfo,
  ResetPasswordInfo,
} from "provider/models/authentication";

export const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAILURE = "AUTHENTICATE_FAILURE";

export interface AuthenticationState {
  role: string;
  token: string;
  error: string | null;
}

export const initialState: AuthenticationState = {
  role: "",
  token: "",
  error: "",
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    authenticate(state, action: PayloadAction<LoginInfo>) {},
    authenticateSuccess(state, action: PayloadAction<AuthenticatedInfo>) {
      const {
        payload: { role, token },
      } = action;
      state.role = role;
      state.token = token;
      state.error = null;
    },
    authenticateFailure(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    },
    recheckToken(state, action: PayloadAction<RecheckTokenInfo>) {},
    resetPassword(state, action: PayloadAction<ResetPasswordInfo>) {},
    forgotPassword(state, action: PayloadAction<string>) {},
    logout() {},
  },
});

export default authenticationSlice.reducer;
