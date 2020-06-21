import { GetProductQuery } from "provider/models";

export const loginUrl = "/auth/signin";
export const forgotPasswordUrl = "/auth/forgotPassword";
export const resetPasswordUrl = "/auth/resetPassword/";
export const signOutUrl = "/auth/signout";

export const signupUrl = "/auth/signup";
export const listUserUrl = "/admin/users";

export const addImageUrl = "/products/images/upload";
export const addItemUrl = "/products/add";
export const updateItemUrl = "/products/update/";
export const deleteItemUrl = "/products/";
export const getProductsUrl = (payload: GetProductQuery) => {
  return `/products/${payload.agencyId}/${payload.limit}/${payload.offset}`;
};
