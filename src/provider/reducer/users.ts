import { User } from "provider/models";
import { GET_USERS_SUCCESS } from "provider/actions";

export interface UserGlobalState {
  items: any[];
}

export const initialState = {
  items: [],
};

export const users = (
  state: UserGlobalState = initialState,
  action: any
): UserGlobalState => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return action.payload.users;
    default:
      return state;
  }
};
