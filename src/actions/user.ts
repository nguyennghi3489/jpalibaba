export const DELETE_USER = "ADMIN.DELETE_USER";
export const DELETE_USER_SUCCESS = "ADMIN.DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "ADMIN.DELETE_USER_FAILURE";

export interface DeleteUserAction {
  type: typeof DELETE_USER;
  id: string;
}

interface DeleteUserSuccessAction {
  type: typeof DELETE_USER_SUCCESS;
  id: string;
}

interface DeleteUserFailureAction {
  type: typeof DELETE_USER_FAILURE;
}

export const deleteUser = (id: string): DeleteUserAction => ({
  type: DELETE_USER,
  id,
});

export const deleteUserFailure = (): DeleteUserFailureAction => ({
  type: DELETE_USER_FAILURE,
});

export const deleteUserSuccess = (id: string): DeleteUserSuccessAction => ({
  type: DELETE_USER_SUCCESS,
  id,
});
