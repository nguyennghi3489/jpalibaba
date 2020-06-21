enum ModalType {
  Alert,
  Error,
  Loading,
}

export interface ModalGlobalState {
  isOpen: boolean;
  text: string;
  type: ModalType;
  action: Function | null;
}

export const initialState: ModalGlobalState = {
  isOpen: false,
  text: "",
  type: ModalType.Loading,
  action: null,
};

export const modal = (
  state: ModalGlobalState = initialState,
  action: any
): ModalGlobalState => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        ...{
          isOpen: true,
          text: action.payload.text,
          type: action.payload.type,
          action: action.payload.action,
        },
      };
    case "HIDE_MODAL":
      return { ...state, ...{ isOpen: false } };
    default:
      return state;
  }
};
