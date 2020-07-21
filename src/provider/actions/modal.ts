export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export enum ModalType {
  Success,
  Error,
  Loading,
  Confirm,
  SignupSuccess,
}

export interface ShowModalAction {
  type: typeof SHOW_MODAL;
  payload: {
    type: ModalType;
    text: string;
    action: Function | null;
  };
}

export interface HideModalAction {
  type: typeof HIDE_MODAL;
}

export const showModal = (
  type: ModalType,
  text: string,
  action: Function | null = null
): ShowModalAction => {
  return {
    type: SHOW_MODAL,
    payload: {
      type,
      text,
      action,
    },
  };
};

export const hideModal = (): HideModalAction => ({
  type: HIDE_MODAL,
});
