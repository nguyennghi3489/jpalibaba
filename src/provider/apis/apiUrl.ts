import { GetProductQuery } from "provider/models";

const baseApiUrl = "";

export const loginUrl = baseApiUrl + "/auth/signin";
export const forgotPasswordUrl = baseApiUrl + "/auth/forgotPassword";
export const resetPasswordUrl = baseApiUrl + "/auth/resetPassword/";
export const signOutUrl = baseApiUrl + "/auth/signout";
export const activeUserUrl = baseApiUrl + "/admin/users/";

export const signupUrl = baseApiUrl + "/auth/signup";
export const listUserUrl = baseApiUrl + "/admin/users";

export const addImageUrl = baseApiUrl + "/products/images/upload";
export const addItemUrl = baseApiUrl + "/products";
export const updateItemUrl = baseApiUrl + "/products/";
export const deleteItemUrl = baseApiUrl + "/products/";
export const getProductsUrl = (payload: GetProductQuery) => {
  return `${baseApiUrl}/products/${payload.agencyId}/${payload.limit}/${payload.offset}`;
};

export const addCampaignUrl = baseApiUrl + "/campaigns";
export const getCampaignUrl = baseApiUrl + "/campaigns/";
