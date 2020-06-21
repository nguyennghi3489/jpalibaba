import { AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE } from "provider/actions";

export interface AuthenticationGlobalState {
  role: string;
  token: string;
  error: string | null;
}

export const initialState = {
  role: "",
  token: "",
  error: "",
};

export const authentication = (
  state: AuthenticationGlobalState = initialState,
  action: any
): AuthenticationGlobalState => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      const {
        payload: { role, token },
      } = action;
      return { ...state, ...{ role, token, error: null } };
    case AUTHENTICATE_FAILURE:
      const {
        payload: { error },
      } = action;
      return { ...state, error };
    default:
      return state;
  }
};
