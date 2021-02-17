export const ADMIN_DEFAULT_ROUTE = "/admin/user-management";
export const IMPORTER_DEFAULT_ROUTE = "/admin/profile";
export const RETAILER_DEFAULT_ROUTE = "/";
export const UPDATE_ITEM_ROUTE = "/admin/create-item";
export const LOGIN_ROUTE = "auth/login";
export const DEFAULT_MAX_LENGTH = 50;
export const ADDRESS_MAX_LENGTH = 100;

export const orderStatusOptions = [
  { value: 0, label: "New" },
  { value: 1, label: "Proceed To Import" },
  { value: 2, label: "Shipped" },
  { value: 3, label: "Delivered" },
  { value: 4, label: "Unable To Import" },
];

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

export const agencyOptions = [
  { value: "agency A", label: "agency A" },
  { value: "agency B", label: "agency B" },
];
