export const ADMIN_DEFAULT_ROUTE = "/admin/user-management";
export const IMPORTER_DEFAULT_ROUTE = "/admin/profile";
export const RETAILER_DEFAULT_ROUTE = "/";
export const UPDATE_ITEM_ROUTE = "/admin/create-item";
export const LOGIN_ROUTE = "auth/login";
export const DEFAULT_MAX_LENGTH = 50;
export const ADDRESS_MAX_LENGTH = 100;

export const countryOptions = [
  { value: "vietnam", label: "Viet Nam" },
  { value: "japan", label: "Japan" },
];

export const categoryOptions = [
  { value: "Food", label: "Food" },
  { value: "Technology", label: "Technology" },
  { value: "Music", label: "Music" },
  { value: "Sport", label: "Sport" },
  { value: "Fashion", label: "Fashion" },
  { value: "Other", label: "Other" },
];
export interface ObjectWithId<T> {
  id: T;
}
