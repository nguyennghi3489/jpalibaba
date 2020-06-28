import { GET_USERS_SUCCESS, DELETE_USER_SUCCESS } from "provider/actions";
import { User } from "provider/models";

export interface UserGlobalState {
  items: User[];
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
      return { ...state, items: action.payload.users };
    case DELETE_USER_SUCCESS: {
      console.log(state);
      const items = state.items.filter((item) => item.id !== action.id);
      return { ...state, items };
    }
    default:
      return state;
  }
};
