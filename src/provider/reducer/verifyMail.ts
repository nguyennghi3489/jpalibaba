import {
  VERIFY_USER_MAIL,
  VERIFY_USER_MAIL_FAILURE,
  VERIFY_USER_MAIL_SUCCESS,
} from "provider/actions";
export interface VerifyMailGlobalState {
  type: string;
}

export const initialState: VerifyMailGlobalState = {
  type: "loading",
};

export const verifyMail = (
  state: VerifyMailGlobalState = initialState,
  action: any
) => {
  switch (action.type) {
    case VERIFY_USER_MAIL:
      return { ...state, type: "loading" };
    case VERIFY_USER_MAIL_SUCCESS:
      return { ...state, type: "success" };
    case VERIFY_USER_MAIL_FAILURE:
      return { ...state, type: "failure" };
    default:
      return state;
  }
};
