import { UserBasicInfo, Address, AddressType, User } from "provider/models";
import { callApi, listUserUrl, deleteUserUrl } from "./";

interface UserListResponse {
  data: User[];
  total: number;
}
interface DeleteUserResponse {
  result: boolean;
}

export const deleteUserApi = (id: string): Promise<DeleteUserResponse> => {
  return callApi("DELETE", deleteUserUrl + id);
};

export const updateUserInfoApi = (
  id: string,
  data: UserBasicInfo
): Promise<DeleteUserResponse> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};

export const updateAddressInfoApi = (
  id: string,
  data: Address,
  type: AddressType
): Promise<DeleteUserResponse> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};

export const getUsersApi = (): Promise<any> => {
  return callApi("GET", listUserUrl);
};
