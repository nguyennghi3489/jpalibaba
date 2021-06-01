import moment, { Moment } from "moment";
import { Image, ProductResponse } from "provider/models";
import { PricePolicy } from "./pricePolicy";

export class Product {
  id: string | null;
  agencyId: string;
  category: string;
  title: string;
  brand: string;
  origin: string;
  unitPrice: number;
  owner: string;
  video: string;
  description: string;
  image?: Image;
  images: Image[];
  created: Moment;
  modified: Moment;
  campaignListCount: number;
  pricePolicies: PricePolicy[];

  constructor(
    id: string | null = null,
    agencyId: string,
    category: string,
    title: string,
    brand: string,
    origin: string,
    unitPrice: number,
    owner: string,
    video: string,
    description: string,
    image: Image | undefined,
    images: Image[],
    created: string,
    modified: string,
    campaignListCount: number,
    pricePolicies: PricePolicy[]
  ) {
    this.id = id;
    this.agencyId = agencyId;
    this.category = category;
    this.title = title;
    this.brand = brand;
    this.origin = origin;
    this.unitPrice = unitPrice;
    this.owner = owner;
    this.video = video;
    this.description = description;
    this.image = image;
    this.images = images;
    this.created = moment(created);
    this.modified = moment(modified);
    this.campaignListCount = campaignListCount;
    this.pricePolicies = pricePolicies;
  }
  static fromApi = (payload: ProductResponse) => {
    return new Product(
      payload.id,
      payload.agencyId,
      payload.category,
      payload.title,
      payload.brand,
      payload.origin,
      payload.unitPrice,
      payload.owner,
      payload.video,
      payload.description,
      payload.image && new Image(payload.image),
      payload.images.map((item) => new Image(item)),
      payload.created,
      payload.modified,
      payload.campaignListCount,
      payload.pricePolicyList.map((item) => new PricePolicy(item))
    );
  };
}
