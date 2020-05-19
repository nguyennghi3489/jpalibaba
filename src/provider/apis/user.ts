import { UserBasicInfo, Address, AddressType } from "provider/models";

interface DeleteUserResponse {
  result: boolean;
}

export const deleteUserApi = (id: string): Promise<DeleteUserResponse> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
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
