import { TABLE_ITEMS_LOAD_NUMBER } from "constant";
import {
  GetProductQuery,
  Product,
  ProductListResponse,
  ProductResponse,
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
  getDetailCampaignUrl,
  getProductsUrl,
  getPublicCampaignUrl,
  getPublicDetailCampaignUrl,
  updateItemUrl,
} from "./";
import { findProductByIdUrl, importProductUrl } from "./apiUrl";

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

export const findProductByIdApi = (
  payload: string
): Promise<ProductResponse> => {
  return callApi("GET", findProductByIdUrl(payload));
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
  payload: File,
  agencyId: string
): Promise<ResponseWithBooleanResult> => {
  let formData = new FormData();
  formData.append("file", payload);
  const apiUrl = `${importProductUrl}/${agencyId}`;
  return callUploadApi("POST", apiUrl, formData);
};

export const addCampaignApi = (
  payload: RequestCampaign
): Promise<ResponseWithBooleanResult> => {
  return callApi("POST", addCampaignUrl, payload);
};

export const getCampaignsApi = (
  agencyId: string,
  productId: string | undefined
): Promise<any> => {
  const params = productId
    ? `?productId=${productId}&offset=0&limit=${TABLE_ITEMS_LOAD_NUMBER}`
    : `?offset=0&limit=${TABLE_ITEMS_LOAD_NUMBER}`;
  return callApi("GET", getCampaignUrl + agencyId + params);
};

export const getCampaignByIdApi = (id: string): Promise<any> => {
  return callApi("GET", getDetailCampaignUrl + id);
};

export const getPublicCampaignByIdApi = (id: string): Promise<any> => {
  return callApi("GET", getPublicDetailCampaignUrl + id);
};

export const getPublicCampaignsApi = (
  querySearch: string = ""
): Promise<any> => {
  const query = getPublicCampaignUrl + querySearch;
  return callApi("GET", query);
};

export const updateCampaignStatusApi = (
  campaignId: string,
  status: boolean
): Promise<any> => {
  return callApi("GET", `${getCampaignUrl}${campaignId}/active/${status}`);
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
