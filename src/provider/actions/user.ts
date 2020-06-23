import { UserBasicInfo, Address, AddressType, User } from "provider/models";

export const GET_USERS = "ADMIN.GET_USERS";
export const GET_USERS_SUCCESS = "ADMIN.GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "ADMIN.GET_USERS_FAILURE";
export const DELETE_USER = "ADMIN.DELETE_USER";
export const DELETE_USER_SUCCESS = "ADMIN.DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "ADMIN.DELETE_USER_FAILURE";
export const UPDATE_BASIC_INFO = "CLIENT.UPDATE_BASIC_INFO";
export const UPDATE_BASIC_INFO_SUCCESS = "CLIENT.UPDATE_BASIC_INFO_SUCCESS";
export const UPDATE_BASIC_INFO_FAILURE = "CLIENT.UPDATE_BASIC_INFO_FAILURE";
export const UPDATE_ADDRESS_INFO = "CLIENT.UPDATE_ADDRESS_INFO";
export const UPDATE_ADDRESS_INFO_SUCCESS = "CLIENT.UPDATE_ADDRESS_INFO_SUCCESS";
export const UPDATE_ADDRESS_INFO_FAILURE = "CLIENT.UPDATE_ADDRESS_INFO_FAILURE";

export interface GetUsersAction {
  type: typeof GET_USERS;
}

interface GetUsersActionSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  users: User[];
}

interface GetUsersActionFailureAction {
  type: typeof GET_USERS_FAILURE;
}

export const getUsers = (): GetUsersAction => ({
  type: GET_USERS,
});

export const getUsersFailure = (): GetUsersActionFailureAction => ({
  type: GET_USERS_FAILURE,
});

export const getUsersSuccess = (
  users: User[]
): GetUsersActionSuccessAction => ({
  type: GET_USERS_SUCCESS,
  users,
});

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

export interface UpdateBasicInfoAction {
  type: typeof UPDATE_BASIC_INFO;
  payload: {
    id: string;
    data: UserBasicInfo;
  };
}

interface UpdateBasicInfoSuccessAction {
  type: typeof UPDATE_BASIC_INFO_SUCCESS;
  id: string;
}

interface UpdateBasicInfoFailureAction {
  type: typeof UPDATE_BASIC_INFO_FAILURE;
}

export const updateBasicInfo = (
  id: string,
  data: UserBasicInfo
): UpdateBasicInfoAction => ({
  type: UPDATE_BASIC_INFO,
  payload: {
    id,
    data,
  },
});

export const updateBasicInfoFailure = (): UpdateBasicInfoFailureAction => ({
  type: UPDATE_BASIC_INFO_FAILURE,
});

export const updateBasicInfoSuccess = (
  id: string
): UpdateBasicInfoSuccessAction => ({
  type: UPDATE_BASIC_INFO_SUCCESS,
  id,
});

export interface UpdateAddressInfoAction {
  type: typeof UPDATE_ADDRESS_INFO;
  payload: {
    id: string;
    data: Address;
    type: AddressType;
  };
}

interface UpdateAddressInfoSuccessAction {
  type: typeof UPDATE_ADDRESS_INFO_SUCCESS;
  id: string;
}

interface UpdateAddressInfoFailureAction {
  type: typeof UPDATE_ADDRESS_INFO_FAILURE;
}

export const updateAddressInfo = (
  id: string,
  data: Address,
  type: AddressType = AddressType.Company
): UpdateAddressInfoAction => ({
  type: UPDATE_ADDRESS_INFO,
  payload: {
    id,
    data,
    type,
  },
});

export const updateAddressInfoFailure = (): UpdateAddressInfoFailureAction => ({
  type: UPDATE_ADDRESS_INFO_FAILURE,
});

export const updateAddressInfoSuccess = (
  id: string
): UpdateAddressInfoSuccessAction => ({
  type: UPDATE_ADDRESS_INFO_SUCCESS,
  id,
});
