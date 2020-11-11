import { UserBasicInfo, Address, User, Agency } from "provider/models";
import {
  callApi,
  listUserUrl,
  deleteUserUrl,
  agencyUrl,
  updateShippingAddressUrl,
  getUserUrl,
} from "./";

// interface UserListResponse {
//   data: User[];
//   total: number;
// }
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

export const updateAgencyInfoApi = (id: string, data: Agency): Promise<any> => {
  return callApi("PATCH", `${agencyUrl}/${id}`, data);
  // const mkData = {
  //   result: true,
  // };

  // return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};

export const updateAddressInfoApi = (
  id: string,
  agencyId: string,
  data: Address
): Promise<any> => {
  return callApi(
    "PATCH",
    `${updateShippingAddressUrl}/${agencyId}/${id}`,
    data
  );
};

export const getUsersApi = (): Promise<any> => {
  return callApi("GET", listUserUrl);
};

export const getAgencyInfoApi = (id: string): Promise<any> => {
  return callApi("GET", `${getUserUrl}/${id}`);
};

export const getAgencyInfoByAdminApi = (id: string): Promise<any> => {
  return callApi("GET", `${listUserUrl}/${id}`);
};
