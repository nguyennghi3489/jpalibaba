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

export interface SimpleOrderInfo {
  id: string;
  agencyName: string;
  total: number;
  price: number;
}

export class OrderDetail {
  id: string;
  retailerId: string;
  importerId: string;
  agencyName: string;
  quantity: number;
  status: number;
  price: number;
  createdDate: Moment;
  modifiedDate: Moment;
  campaign: Campaign;
  shippingAddress: Address;
  constructor(object: OrderResponse) {
    this.id = object.id;
    this.retailerId = object.retailerId;
    this.importerId = object.importerId;
    this.quantity = object.quantity;
    this.status = object.status;
    this.price = object.price;
    this.createdDate = moment(object.created);
    this.modifiedDate = moment(object.modified);
    this.campaign = new Campaign(object.campaign);
    this.shippingAddress = object.shippingAddress;
    this.agencyName = object.agencyName;
  }

  static fromApi(response: OrderResponse) {
    return new OrderDetail(response);
  }
}
