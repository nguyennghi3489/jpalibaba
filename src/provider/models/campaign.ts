import { CampaignResponse, Product } from "provider/models";
import moment, { Moment } from "moment";
export class Campaign {
  id: string;
  agencyId: string;
  category: string;
  title: string;
  description: string;
  owner: string;
  goal: number;
  minAmountPerOrder: number;
  currentAmountOfOrders: number;
  start: Moment;
  expiry: Moment;
  closed: null | string;
  created: Moment | null;
  modified: null | Moment;
  activated: boolean;
  product: Product;
  constructor(input: CampaignResponse) {
    this.id = input.id;
    this.agencyId = input.agencyId;
    this.category = input.category;
    this.title = input.title;
    this.owner = input.owner;
    this.description = input.description;
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
  toCampaignManagmentItem() {
    return {
      id: this.id,
      title: this.title,
      productName: this.product.title,
      minAmountPerOrder: this.minAmountPerOrder,
      start: this.start.format("L"),
      expiry: this.expiry.format("L"),
    };
  }

  toPublicCampaignItem() {
    return {
      id: this.id,
      title: this.title,
      productName: this.product.title,
      endDate: this.expiry,
      description: this.description,
      minAmountPerOrder: this.minAmountPerOrder,
      placed: this.currentAmountOfOrders,
      goalPercent: (this.currentAmountOfOrders * 100) / this.goal,
      image: this.product.images[0].largeUrl,
      unitPrice: this.product.unitPrice,
      isStart: this.start.diff(moment()) < 0,
      duration: this.expiry.diff(moment(), "days"),
    };
  }

  toPublicCampaignDetailItem() {
    return {
      id: this.id,
      title: this.title,
      brand: this.product.brand,
      category: this.product.category,
      productName: this.product.title,
      endDate: this.expiry,
      description: this.description,
      minAmountPerOrder: this.minAmountPerOrder,
      placed: this.currentAmountOfOrders,
      totalSales: this.currentAmountOfOrders * parseInt(this.product.unitPrice),
      goalPercent: (this.currentAmountOfOrders * 100) / this.goal,
      image: this.product.images[0].largeUrl,
      unitPrice: this.product.unitPrice,
      unitPriceFor1000: parseInt(this.product.unitPrice) * 1000,
      isStart: this.start.diff(moment()) < 0,
      isExpiry: this.expiry.diff(moment()) > 0,
      duration: this.expiry.diff(moment(), "days"),
    };
  }
}
