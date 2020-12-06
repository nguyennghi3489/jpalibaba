import { ImageResponse } from "./response";
export class Image {
  created: string;
  id: string;
  largeUrl: string;
  mediumUrl: string;
  originalUrl: string;
  productId: string;
  thumbUrl: string;
  constructor(input: ImageResponse) {
    this.created = input.created;
    this.id = input.key;
    this.largeUrl = input.largeUrl;
    this.mediumUrl = input.mediumUrl;
    this.originalUrl = input.originalUrl;
    this.productId = input.productId;
    this.thumbUrl = input.thumbUrl;
  }
}

export interface ImageItem {
  created: string;
  id: string;
  largeUrl: string;
  mediumUrl: string;
  originalUrl: string;
  thumbUrl: string;
  title: string;
}
