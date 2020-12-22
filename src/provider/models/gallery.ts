export interface GalleryResponse {
  gallery: Gallery;
}

export interface Gallery {
  id: string;
  created: string;
  title: string;
  key: string;
  largeUrl: string;
  mediumUrl: string;
  original: string;
  productId: string;
  thumbnail: string;
}

export interface GalleryRequest {
  agencyId: string;
  image: File;
  title: string;
}

export type AddGalleryPayload = GalleryRequest;
export interface GalleryListResponse {
  galleryImages: {
    totalCount: number;
    images: GalleryResponse[];
  };
}

export interface GetGalleryQuery {
  limit: string;
  offset: string;
}

export const initialGalleryQuery: GetGalleryQuery = {
  limit: "10",
  offset: "0",
};
