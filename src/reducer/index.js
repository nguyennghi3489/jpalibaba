// import { combineReducers } from "redux";

// export default combineReducers({});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "AUTHENTICATE_SUCCESS":
      console.log("LOGIN OK");
      const {
        payload: { role, token }
      } = action;
      return { ...state, ...{ role, token } };
    default:
      return state;
  }
};
export default reducer;
