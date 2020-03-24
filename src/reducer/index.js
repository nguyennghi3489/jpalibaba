// import { combineReducers } from "redux";

// export default combineReducers({});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default reducer;
