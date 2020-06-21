import { createSelector } from "reselect";
import { AppState } from "provider/reducer";

const accountSelector = (state: AppState) => state.account;

export const firstNameSelector = createSelector(
  accountSelector,
  (authentication) => authentication.firstName
);

export const getAgencyIdSelector = createSelector(
  accountSelector,
  (authentication) => authentication.agencyId
);

export const getUserIdSelector = createSelector(
  accountSelector,
  (authentication) => authentication.userId
);
