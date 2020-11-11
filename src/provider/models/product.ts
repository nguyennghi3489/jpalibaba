import moment, { Moment } from "moment";
import { Image, ProductResponse } from "provider/models";

export class Product {
  id: string | null;
  agencyId: string;
  category: string;
  title: string;
  brand: string;
  origin: string;
  unitPrice: string;
  owner: string;
  video: string;
  description: string;
  images: Image[];
  created: Moment;
  modified: Moment;
  constructor(
    id: string | null = null,
    agencyId: string,
    category: string,
    title: string,
    brand: string,
    origin: string,
    unitPrice: string,
    owner: string,
    video: string,
    description: string,
    images: Image[],
    created: string,
    modified: string
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
    this.images = images;
    this.created = moment(created);
    this.modified = moment(modified);
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
      payload.images.map((item) => new Image(item)),
      payload.created,
      payload.modified
    );
  };
}
