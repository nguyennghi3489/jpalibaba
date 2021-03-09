import { Campaign } from "./campaign";

export interface OrderInfo {
  campaign: Campaign;
  quantity: number;
  retailerId: string;
  shippingAddressId?: string;
}
