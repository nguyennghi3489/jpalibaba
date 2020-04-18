import { SignupInfo } from "models";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export interface ShowModalAction {
  type: typeof SHOW_MODAL;
}

export interface HideModalAction {
  type: typeof HIDE_MODAL;
}

export const showModal = (): ShowModalAction => ({
  type: SHOW_MODAL,
});

export const hideModal = (): HideModalAction => ({
  type: HIDE_MODAL,
});
