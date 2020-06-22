import { GetProductQuery } from "provider/models";

const baseApiUrl = "http://ec2-3-24-9-23.ap-southeast-2.compute.amazonaws.com";

export const loginUrl = baseApiUrl + "/auth/signin";
export const forgotPasswordUrl = baseApiUrl + "/auth/forgotPassword";
export const resetPasswordUrl = baseApiUrl + "/auth/resetPassword/";
export const signOutUrl = baseApiUrl + "/auth/signout";

export const signupUrl = baseApiUrl + "/auth/signup";
export const listUserUrl = baseApiUrl + "/admin/users";

export const addImageUrl = baseApiUrl + "/products/images/upload";
export const addItemUrl = baseApiUrl + "/products/add";
export const updateItemUrl = baseApiUrl + "/products/";
export const deleteItemUrl = baseApiUrl + "/products/";
export const getProductsUrl = (payload: GetProductQuery) => {
  return `${baseApiUrl}/products/${payload.agencyId}/${payload.limit}/${payload.offset}`;
};

export const addCampaignUrl = baseApiUrl + "/campaigns";
export const getCampaignUrl = baseApiUrl + "/campaigns/";
