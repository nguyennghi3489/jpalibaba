import { AppState } from "provider/reducer";

export const verifyMailResultSelector = (state: AppState) =>
  state.verifyMail.type;
