import { callApi } from "provider/apis";
import { baseApiUrl } from "./";

interface GetGalleryQuery {
  agencyId: string;
  limit: string;
  offset: string;
}

const baseGalleryUrl = baseApiUrl + "/gallery";
const addGalleryUrl = baseGalleryUrl + "/add";
const getGalleryUrl = (payload: GetGalleryQuery): string => {
  return `${getGalleryUrl(payload)}`;
};

interface GalleryResponse {
  id: string;
  created: string;
  key: string;
  largeUrl: string;
  mediumUrl: string;
  originalUrl: string;
  productId: string;
  thumbUrl: string;
}

interface GalleryInfo {
  file: File;
  name: string;
}
interface AddGalleryPayload {
  agencyId: string;
  galleryInfo: GalleryInfo;
}

export const activeUserApi = (
  payload: AddGalleryPayload
): Promise<GalleryResponse> => {
  const { galleryInfo, agencyId } = payload;
  let formData = new FormData();
  formData.append("name", galleryInfo.name);
  formData.append("file", galleryInfo.file);
  return callApi("POST", `${addGalleryUrl}/${agencyId}`, formData);
};

interface GalleryListResponse {
  data: {
    totalCount: number;
    entities: GalleryResponse[];
  };
}

export const getGalleryPhotos = (
  payload: GetGalleryQuery
): Promise<GalleryListResponse> => {
  return callApi("GET", `${getGalleryUrl(payload)}`);
};
