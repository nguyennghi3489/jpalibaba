import {
  GetProductQuery,
  Product,
  ProductListResponse,
  RequestCampaign,
  ResponseWithBooleanResult,
  ResponseWithStringResult,
} from "provider/models";
import {
  addCampaignUrl,
  addImageUrl,
  addItemUrl,
  addItemWithCampaignUrl,
  callApi,
  callUploadApi,
  deleteItemUrl,
  getCampaignUrl,
  getProductsUrl,
  updateItemUrl,
} from "./";

export const addItemApi = (
  payload: Product
): Promise<ResponseWithBooleanResult> => {
  return callApi("POST", addItemUrl, payload);
};

export const addItemFlowApi = (
  payload: any
): Promise<ResponseWithBooleanResult> => {
  return callApi("POST", addItemWithCampaignUrl, payload);
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
  payload: RequestCampaign
): Promise<ResponseWithBooleanResult> => {
  return callApi("POST", addCampaignUrl, payload);
};

export const getCampaignsApi = (payload: string): Promise<any> => {
  return callApi("GET", getCampaignUrl + payload + "/0/20");
};

export const getCampaignByIdApi = (id: string): Promise<any> => {
  return callApi("GET", getCampaignUrl + id);
};

export const getPublicCampaignsApi = (): Promise<any> => {
  return callApi("GET", getCampaignUrl + "0/20");
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
