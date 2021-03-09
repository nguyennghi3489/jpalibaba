import { getAddressListUrl } from "./apiUrl";
import { callApi } from "./base";

export const getAddressListApi = (agency: string): Promise<any> => {
  return callApi("GET", getAddressListUrl(agency));
};
