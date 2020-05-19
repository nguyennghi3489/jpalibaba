import { createSelector } from "reselect";
import { AppState } from "../reducer";

const userSelector = (state: AppState) => state.user;

export const firstNameSelector = createSelector(
  userSelector,
  authentication => authentication.firstName
);
