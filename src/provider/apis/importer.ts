import {
  ResponseWithBooleanResult,
  ResponseWithStringResult,
  ProductExportQuery,
  Product,
  GetProductQuery,
  Campaign,
  ProductListResponse,
} from "provider/models";
import {
  callUploadApi,
  callApi,
  addImageUrl,
  addItemUrl,
  getProductsUrl,
  deleteItemUrl,
  updateItemUrl,
} from "./";

export const addItemApi = (
  payload: Product
): Promise<ResponseWithBooleanResult> => {
  return callApi("POST", addItemUrl, payload);
};

export const updateItemApi = (payload: {
  product: Product;
  id: string;
}): Promise<ResponseWithBooleanResult> => {
  return callApi("PATCH", updateItemUrl + payload.id, payload.product);
};

export const getProductsApi = (
  payload: GetProductQuery
): Promise<ProductListResponse> => {
  return callApi("GET", getProductsUrl(payload));
};

export const deleteItemApi = (
  payload: string
): Promise<ResponseWithBooleanResult> => {
  return callApi("DELETE", deleteItemUrl + payload);
};

export const importItemApi = (
  payload: File
): Promise<ResponseWithBooleanResult> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};

export const addCampaignApi = (
  payload: Campaign
): Promise<ResponseWithBooleanResult> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};

export const deleteCampaignApi = (
  payload: string
): Promise<ResponseWithBooleanResult> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};

export const addImageApi = (
  payload: File
): Promise<ResponseWithStringResult> => {
  let formData = new FormData();
  formData.append("file", payload);
  return callUploadApi("POST", addImageUrl, formData);
};
