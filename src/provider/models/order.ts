import moment, { Moment } from "moment";
import { Address } from "./address";
import { Campaign } from "./campaign";
import { OrderResponse } from "./response";

export interface OrderInfo {
  campaignId: Campaign;
  quantity: number;
  importerId: string;
  shippingAddressId?: string;
}

export class OrderDetail {
  id: string;
  quantity: number;
  status: number;
  createdDate: Moment;
  modifiedDate: Moment;
  campaign: Campaign;
  shippingAddress: Address;
  constructor(object: OrderResponse) {
    this.id = object.id;
    this.quantity = object.quantity;
    this.status = object.status;
    this.createdDate = moment(object.created);
    this.modifiedDate = moment(object.modified);
    this.campaign = new Campaign(object.campaign);
    this.shippingAddress = object.shippingAddress;
  }

  static fromApi(response: OrderResponse) {
    return new OrderDetail(response);
  }
}
