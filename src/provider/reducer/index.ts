import { combineReducers } from "redux";
import { User } from "provider/models";
import { GET_USERS_SUCCESS } from "provider/actions";

enum ModalType {
  Alert,
  Error,
  Loading,
}

export interface AccountState {
  firstName: string;
  lastName: string;
}

export interface AuthenticationState {
  role: string;
  token: string;
  error: string;
}

export interface ModalState {
  isOpen: boolean;
  text: string;
  type: ModalType;
  action: Function | null;
}

export interface AppState {
  users: User[];
  account: AccountState;
  authentication: AuthenticationState;
  modal: ModalState;
}

const initialState = {
  users: [],
  account: {},
  authentication: {},
  modal: { isOpen: false },
};

const modal = (state = {}, action: any) => {
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

const users = (state = initialState.users, action: any) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return action.payload.users;
    default:
      return state;
  }
};

const account = (state = {}, action: any) => {
  switch (action.type) {
    case "AUTHENTICATE_SUCCESS":
      const {
        payload: { account },
      } = action;
      return { ...state, ...account };
    default:
      return state;
  }
};

const authentication = (state = {}, action: any) => {
  switch (action.type) {
    case "AUTHENTICATE_SUCCESS":
      const {
        payload: { role, token },
      } = action;
      return { ...state, ...{ role, token, error: null } };
    case "AUTHENTICATE_FAILURE":
      const {
        payload: { error },
      } = action;
      return { ...state, error };
    default:
      return state;
  }
};

const appReducer = combineReducers({ account, authentication, modal, users });

const rootReducer = (state = initialState, action: any) => {
  if (action.type === "LOGOUT") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
