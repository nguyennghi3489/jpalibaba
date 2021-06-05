import { TABLE_ITEMS_LOAD_NUMBER } from "constant";
import { OrderInfo } from "provider/models";
import {
  createOrderUrl,
  getImporterOrdersUrl,
  getOrderByIdUrl,
  getRetailerOrdersUrl,
} from "./apiUrl";
import { callApi } from "./base";

export const createOrderApi = (
  data: OrderInfo,
  agencyId: string
): Promise<any> => {
  return callApi("POST", createOrderUrl(agencyId), data);
};

export const getRetailerOrdersApi = (agencyId: string): Promise<any> => {
  return callApi(
    "GET",
    getRetailerOrdersUrl(agencyId) +
      `?offset=0&limit=${TABLE_ITEMS_LOAD_NUMBER}`
  );
};

export const getImporterOrdersApi = (agencyId: string): Promise<any> => {
  return callApi(
    "GET",
    getImporterOrdersUrl(agencyId) +
      `?offset=0&limit=${TABLE_ITEMS_LOAD_NUMBER}`
  );
};

export const getOrderByIdApi = (id: string): Promise<any> => {
  return callApi("GET", getOrderByIdUrl(id));
};

export const updateOrderStatusApi = (
  orderId: string,
  status: number
): Promise<any> => {
  return callApi("PATCH", getOrderByIdUrl(orderId), { status });
};
