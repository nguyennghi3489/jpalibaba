export interface GalleryResponse {
  id: string;
  created: string;
  title: string;
  key: string;
  largeUrl: string;
  mediumUrl: string;
  originalUrl: string;
  productId: string;
  thumbUrl: string;
}

export interface GalleryRequest {
  image: File;
  title: string;
}

export type AddGalleryPayload = GalleryRequest;
export interface GalleryListResponse {
  data: {
    totalCount: number;
    images: GalleryResponse[];
  };
}

export interface GetGalleryQuery {
  limit: string;
  offset: string;
}
