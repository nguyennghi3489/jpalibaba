import { Campaign } from "./campaign";

export interface OrderInfo {
  campaignId: Campaign;
  quantity: number;
  importerId: string;
  shippingAddressId?: string;
}
