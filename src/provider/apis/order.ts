import { OrderInfo } from "provider/models";
import { createOrderUrl, getRetailerOrderApi } from "./apiUrl";
import { callApi } from "./base";

export const createOrderApi = (
  data: OrderInfo,
  agencyId: string
): Promise<any> => {
  return callApi("POST", createOrderUrl(agencyId), data);
};

export const getRetailerOrdersApi = (agencyId: string): Promise<any> => {
  return callApi("GET", getRetailerOrderApi(agencyId));
};
