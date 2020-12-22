import moment, { Moment } from "moment";
import {
  CampaignAdminResponse,
  CampaignResponse,
  Product,
} from "provider/models";

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
  toCampaignManagmentItem() {
    return {
      id: this.id,
      title: this.title,
      minAmountPerOrder: this.minAmountPerOrder,
      start: this.start.format("L"),
      expiry: this.expiry.format("L"),
    };
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
  constructor(input: CampaignResponse) {
    console.log(input);
    console.log("------");
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
  }

  toPublicCampaignItem() {
    return {
      id: this.id,
      title: this.product.title,
      productName: this.product.title,
      endDate: this.expiry,
      description: this.product.description,
      minAmountPerOrder: this.minAmountPerOrder,
      placed: this.currentAmountOfOrders,
      goalPercent: (this.currentAmountOfOrders * 100) / this.goal,
      image: this.product.image.mediumUrl,
      unitPrice: this.product.unitPrice,
      isStart: this.start.diff(moment()) < 0,
      duration: this.expiry.diff(moment(), "days"),
      pricePolicies: this.product.pricePolicies,
    };
  }

  toPublicCampaignDetailItem() {
    return {
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
      goalPercent: (this.currentAmountOfOrders * 100) / this.goal,
      image: this.product.image.mediumUrl,
      unitPrice: this.product.unitPrice,
      unitPriceFor1000: parseInt(this.product.unitPrice) * 1000,
      isStart: this.start.diff(moment()) < 0,
      isExpiry: this.expiry.diff(moment()) > 0,
      duration: this.expiry.diff(moment(), "days"),
      pricePolicies: this.product.pricePolicies,
    };
  }
}
