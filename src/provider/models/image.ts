import { ImageResponse } from "./response";
export class Image {
  id: string;
  title: string;
  fileName: string;
  originalUrl: string;
  thumbUrl: string;
  mediumUrl: string;
  largeUrl: string;
  created: string;
  agency: string;
  constructor(input: ImageResponse) {
    this.id = input.id;
    this.title = input.title;
    this.fileName = input.fileName;
    this.largeUrl = input.largeUrl;
    this.mediumUrl = input.mediumUrl;
    this.originalUrl = input.originalUrl;
    this.agency = input.agency;
    this.created = input.created;
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
