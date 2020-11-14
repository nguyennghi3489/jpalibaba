import {
  DELETE_USER_SUCCESS,
  GET_AGENCY_INFO_SUCCESS,
  GET_USERS_SUCCESS,
} from "provider/actions";
import { User } from "provider/models";

export interface UserGlobalState {
  items: User[];
  selectedUser: any;
}

export const initialState = {
  items: [],
  selectedUser: null,
};

export const users = (
  state: UserGlobalState = initialState,
  action: any
): UserGlobalState => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, items: action.payload.users };
    case DELETE_USER_SUCCESS: {
      const items = state.items.filter((item) => item.id !== action.id);
      return { ...state, items };
    }
    case GET_AGENCY_INFO_SUCCESS:
      return { ...state, selectedUser: action.payload.agency };
    default:
      return state;
  }
};
