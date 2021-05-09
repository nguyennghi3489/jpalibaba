import { GetProductQuery } from "provider/models";
import { ListQuery } from "provider/models/common";

export const baseApiUrl = process.env.REACT_APP_API_URL;

export const loginUrl = baseApiUrl + "/auth/signin";
export const forgotPasswordUrl = baseApiUrl + "/auth/forgotPassword";
export const resetPasswordUrl = baseApiUrl + "/auth/resetPassword/";
export const signOutUrl = baseApiUrl + "/auth/signout";
export const activeUserUrl = baseApiUrl + "/admin/users/";

export const signupUrl = baseApiUrl + "/auth/signup";
export const listUserUrl = baseApiUrl + "/admin/users";
export const listRetailersUrl = baseApiUrl + "/retailers";
export const deleteUserUrl = baseApiUrl + "/admin/users/";
export const getUserUrl = baseApiUrl + "/users";
export const verifyMailUrl = baseApiUrl + "/auth/verifyEmail/";

export const addImageUrl = baseApiUrl + "/products/images/upload";
export const addItemWithCampaignUrl = baseApiUrl + "/productsWithCampaign";
export const addItemUrl = baseApiUrl + "/products";
export const updateItemUrl = baseApiUrl + "/products/";
export const deleteItemUrl = baseApiUrl + "/products/";
export const getProductsUrl = (payload: GetProductQuery) => {
  return `${baseApiUrl}/products/${payload.agencyId}/${payload.offset}/${payload.limit}`;
};
export const findProductByIdUrl = (payload: string) => {
  return `${baseApiUrl}/products/${payload}`;
};

// # Gallery Image
export const uploadGalleryUrl = baseApiUrl + "/gallery/upload";
export const getGalleryImages = (payload: ListQuery) => {
  return `${baseApiUrl}/gallery/${payload.agencyId}/${payload.offset}/${payload.limit}`;
};
export const deleteGalleryImageUrl = (id: string) => {
  return `${baseApiUrl}/gallery/${id}`;
};

export const addCampaignUrl = baseApiUrl + "/campaigns";
export const getCampaignUrl = baseApiUrl + "/campaigns/";
export const getPublicCampaignUrl = baseApiUrl + "/public/campaigns";
export const getDetailCampaignUrl = baseApiUrl + "/campaigns/detail/";

export const agencyUrl = baseApiUrl + "/users/agency";
export const updateShippingAddressUrl = baseApiUrl + "/users/shippingAddress";

// Order Item
export const createOrderUrl = (agencyId: string) =>
  `${baseApiUrl}/order/${agencyId}`;
export const getRetailerOrdersUrl = (agencyId: string) =>
  `${baseApiUrl}/orders/retailer/${agencyId}`;
export const getImporterOrdersUrl = (agencyId: string) =>
  `${baseApiUrl}/orders/importer/${agencyId}`;
export const getOrderByIdUrl = (id: string) => `${baseApiUrl}/order/${id}`;

// Shipping Address
export const getAddressListUrl = (agencyId: string) =>
  `${baseApiUrl}/address/${agencyId}`;
export const createAddressUrl = (agencyId: string) =>
  `${baseApiUrl}/address/${agencyId}`;

// Notification
export const getNotificationUrl = (agencyId: string) =>
  `${baseApiUrl}/notification/${agencyId}`;
export const getUnreadNotificationUrl = (agencyId: string) =>
  `${baseApiUrl}/notification/unread/${agencyId}`;
export const readNotificationUrl = (agencyId: string) =>
  `${baseApiUrl}/notification/read/${agencyId}`;

// Mail Setting
export const getMailSettingUrl = (agencyId: string) =>
  `${baseApiUrl}/users/settings/${agencyId}`;

export const updateMailSettingUrl = () => `${baseApiUrl}/users/settings`;
