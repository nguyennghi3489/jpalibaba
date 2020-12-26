import { AppState } from "provider/reducer";

export const usersSelector = (state: AppState) => state.users.items;
export const getRetailersSelector = (state: AppState) => state.retailers.list;
export const getRetailersHasNextSelector = (state: AppState) =>
  state.retailers.hasNext;
