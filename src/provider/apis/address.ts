import { Address } from "provider/models";
import { getAddressListUrl, createAddressUrl } from "./apiUrl";
import { callApi } from "./base";

export const getAddressListApi = (agency: string): Promise<any> => {
  return callApi("GET", getAddressListUrl(agency));
};

export const createAddressApi = (
  agency: string,
  address: Address
): Promise<any> => {
  return callApi("POST", createAddressUrl(agency), address);
};
