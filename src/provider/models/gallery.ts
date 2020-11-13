export interface GalleryResponse {
  id: string;
  created: string;
  key: string;
  largeUrl: string;
  mediumUrl: string;
  originalUrl: string;
  productId: string;
  thumbUrl: string;
}

export interface GalleryInfo {
  file: File;
  name: string;
}

export interface AddGalleryPayload {
  agencyId: string;
  galleryInfo: GalleryInfo;
}

export interface GalleryListResponse {
  data: {
    totalCount: number;
    entities: GalleryResponse[];
  };
}

export interface GetGalleryQuery {
  agencyId: string;
  limit: string;
  offset: string;
}
