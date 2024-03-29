export const ADMIN_DEFAULT_ROUTE = "/admin/user-management";
export const IMPORTER_DEFAULT_ROUTE = "/admin/profile";
export const RETAILER_DEFAULT_ROUTE = "/";
export const UPDATE_ITEM_ROUTE = "/admin/create-item";
export const LOGIN_ROUTE = "auth/login";
export const DEFAULT_CAMPAIGN_PER_PAGE = 10;
export const TABLE_ITEMS_LOAD_NUMBER = 5000;
export const DEFAULT_MAX_LENGTH = 50;
export const ADDRESS_MAX_LENGTH = 100;
export const LOAD_NOTIFICATION_INTERVAL = 10000;

export enum OrderStatusEnum {
  NEW = 0,
  PROCEED_TO_IMPORT = 1,
  SHIPPED = 2,
  DELIVERED = 3,
  UNABLE_TO_IMPORT = 4,
  CANCELED = 5,
}

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
  { value: 1, label: "Food" },
  { value: 2, label: "Technology" },
  { value: 3, label: "Music" },
  { value: 4, label: "Sport" },
  { value: 5, label: "Fashion" },
  { value: 10, label: "Other" },
];

export interface ObjectWithId<T> {
  id: T;
}

export const agencyOptions = [
  { value: "agency A", label: "agency A" },
  { value: "agency B", label: "agency B" },
];
