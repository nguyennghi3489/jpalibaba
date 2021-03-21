import { OrderInfo } from "provider/models";
import {
  createOrderUrl,
  getImporterOrdersUrl,
  getOrderByIdUrl,
  getRetailerOrdersUrl
} from "./apiUrl";
import { callApi } from "./base";

export const createOrderApi = (
  data: OrderInfo,
  agencyId: string
): Promise<any> => {
  return callApi("POST", createOrderUrl(agencyId), data);
};

export const getRetailerOrdersApi = (agencyId: string): Promise<any> => {
  return callApi("GET", getRetailerOrdersUrl(agencyId));
};

export const getImporterOrdersApi = (agencyId: string): Promise<any> => {
  return callApi("GET", getImporterOrdersUrl(agencyId));
};

export const getOrderByIdApi = (id: string): Promise<any> => {
  return callApi("GET", getOrderByIdUrl(id));
};
