import { OrderInfo } from "provider/models";
import { createOrderUrl } from "./apiUrl";
import { callApi } from "./base";

export const createOrderApi = (
  data: OrderInfo,
  importerId: string
): Promise<any> => {
  return callApi("POST", createOrderUrl(importerId), data);
};
