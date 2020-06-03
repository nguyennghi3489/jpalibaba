import { createSelector } from "reselect";
import { AppState } from "provider/reducer";

export const usersSelector = (state: AppState) => state.users;
