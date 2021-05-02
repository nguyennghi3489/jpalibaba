import { authenticationSlice } from "provider/actions/slice/authentication";

export interface AccountGlobalState {
  firstName: string;
  lastName: string;
  agencyId: string;
  userId: string;
}

export const initialState: AccountGlobalState = {
  firstName: "",
  lastName: "",
  agencyId: "",
  userId: "",
};

export const account = (
  state: AccountGlobalState = initialState,
  action: any
) => {
  switch (action.type) {
    case authenticationSlice.actions.authenticateSuccess.type:
      const {
        payload: { account },
      } = action;
      return { ...state, ...account };
    default:
      return state;
  }
};
