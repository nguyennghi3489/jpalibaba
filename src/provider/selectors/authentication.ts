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

export const getErrorSelector = createSelector(
  authenticationSelector,
  (authentication) => authentication.error
);
export const getBackLinkSelector = createSelector(
  authenticationSelector,
  (authentication) => authentication.backLink
);
