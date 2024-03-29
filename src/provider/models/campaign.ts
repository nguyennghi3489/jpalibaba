import { formatStandardDate } from "helpers";
import moment, { duration, Moment } from "moment";
import {
  CampaignAdminResponse,
  CampaignResponse,
  Product,
} from "provider/models";
import { SimpleOrderInfo } from "./order";

export class CampaignAdmin {
  title: string;
  activated: boolean;
  agencyId: string;
  closed: null | string;
  created: null | Moment;
  currentAmountOfOrders: number;
  expiry: Moment;
  goal: number;
  id: string;
  minAmountPerOrder: number;
  modified: null | Moment;
  start: Moment;
  constructor(input: CampaignAdminResponse) {
    this.title = input.title;
    this.id = input.id;
    this.agencyId = input.agencyId;
    this.goal = input.goal;
    this.minAmountPerOrder = input.minAmountPerOrder;
    this.currentAmountOfOrders = input.currentAmountOfOrders;
    this.start = moment.parseZone(input.start);
    this.expiry = moment.parseZone(input.expiry);
    this.closed = input.closed;
    this.created = input.created ? moment(input.created) : null;
    this.modified = input.modified ? moment(input.modified) : null;
    this.activated = input.activated;
  }
  toCampaignManagementItem() {
    return {
      activated: this.activated,
      id: this.id,
      title: this.title,
      goal: this.goal,
      currentAmountOfOrders: this.currentAmountOfOrders,
      goalPercent: ((this.currentAmountOfOrders * 100) / this.goal).toFixed(2),
      minAmountPerOrder: this.minAmountPerOrder,
      start: formatStandardDate(this.start),
      expiry: formatStandardDate(this.expiry),
    };
  }
  updateStatus(status: boolean) {
    this.activated = status;
    return this;
  }
}
export class Campaign {
  id: string;
  goal: number;
  minAmountPerOrder: number;
  currentAmountOfOrders: number;
  activated: boolean;
  expiry: Moment;
  start: Moment;
  closed: null | string;
  created: Moment | null;
  modified: null | Moment;
  product: Product;
  orders?: SimpleOrderInfo[];

  constructor(input: CampaignResponse) {
    this.id = input.id;
    this.goal = input.goal;
    this.minAmountPerOrder = input.minAmountPerOrder;
    this.currentAmountOfOrders = input.currentAmountOfOrders;
    this.start = moment.parseZone(input.start);
    this.expiry = moment.parseZone(input.expiry);
    this.closed = input.closed;
    this.created = input.created ? moment(input.created) : null;
    this.modified = input.modified ? moment(input.modified) : null;
    this.activated = input.activated;
    this.product = Product.fromApi(input.product);
    this.orders = input.orders;
  }

  toPublicCampaignItem(agencyId?: string) {
    const pricePolicies =
      agencyId &&
      this.product.pricePolicies.filter((item) => item.retailId === agencyId);
    const appliedPrice =
      pricePolicies && pricePolicies.length > 0
        ? pricePolicies[0].unitPrice
        : this.product.unitPrice;
    return {
      id: this.id,
      title: this.product.title,
      productName: this.product.title,
      endDate: this.expiry,
      description: this.product.description,
      minAmountPerOrder: this.minAmountPerOrder,
      placed: this.currentAmountOfOrders,
      goalPercent: ((this.currentAmountOfOrders * 100) / this.goal).toFixed(2),
      image: this.product.image?.mediumUrl,
      unitPrice: appliedPrice.toFixed(2),
      isStart: this.start.diff(moment()) < 0,
      duration: this.expiry.diff(moment()),
      pricePolicies: appliedPrice,
    };
  }

  toPublicCampaignDetailItem(agencyId?: string) {
    const pricePoliciesForRetailer =
      agencyId &&
      this.product.pricePolicies.filter((item) => item.retailId === agencyId);
    const appliedPrice =
      pricePoliciesForRetailer && pricePoliciesForRetailer.length > 0
        ? pricePoliciesForRetailer[0].unitPrice
        : parseInt(this.product.unitPrice);
    return {
      agencyId: this.product.agencyId,
      id: this.id,
      title: this.product.title,
      brand: this.product.brand,
      category: this.product.category,
      productName: this.product.title,
      endDate: this.expiry,
      description: this.product.description,
      minAmountPerOrder: this.minAmountPerOrder,
      placed: this.currentAmountOfOrders,
      totalSales: this.currentAmountOfOrders * parseInt(this.product.unitPrice),
      goal: this.goal,
      goalPercent: ((this.currentAmountOfOrders * 100) / this.goal).toFixed(2),
      image: this.product.image,
      images: this.product.images,
      unitPrice: appliedPrice,
      unitPriceFor1000: appliedPrice * this.minAmountPerOrder,
      isStart: this.start.diff(moment()) < 0,
      isExpiry: this.expiry.diff(moment()) > 0,
      duration: this.expiry.diff(moment()),
      pricePolicies: this.product.pricePolicies,
      orders: this.orders,
    };
  }
}
