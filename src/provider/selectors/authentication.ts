import { createSelector } from "reselect";
import { AppState } from "provider/reducer";

const authenticationSelector = (state: AppState) => state.authentication;

export const tokenSelector = createSelector(
  authenticationSelector,
  (authentication) => authentication.token
);
export const roleSelector = createSelector(
  authenticationSelector,
  (authentication) => authentication.role
);
