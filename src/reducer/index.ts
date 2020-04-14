import { combineReducers } from "redux";

export interface UserState {
  firstName: string;
  lastName: string;
}

export interface AuthenticationState {
  role: string;
  token: string;
}

export interface AppState {
  user: UserState;
  authentication: AuthenticationState;
}

const user = (state = {}, action: any) => {
  switch (action.type) {
    case "AUTHENTICATE_SUCCESS":
      const {
        payload: { user }
      } = action;
      return { ...state, ...user };
    default:
      return state;
  }
};

const authentication = (state = {}, action: any) => {
  switch (action.type) {
    case "AUTHENTICATE_SUCCESS":
      const {
        payload: { role, token }
      } = action;
      return { ...state, ...{ role, token } };
    default:
      return state;
  }
};

const appReducer = combineReducers({ user, authentication });

const initialState = { user: {}, authentication: {} };

const rootReducer = (state = initialState, action: any) => {
  if (action.type === "LOGOUT") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
