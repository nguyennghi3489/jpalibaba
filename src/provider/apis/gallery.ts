import { callApi } from "provider/apis";
import {
  AddGalleryPayload,
  GalleryListResponse,
  GalleryResponse,
  GetGalleryQuery,
} from "provider/models/gallery";
import { baseApiUrl } from "./";

const baseGalleryUrl = baseApiUrl + "/gallery";
const addGalleryUrl = baseGalleryUrl + "/add";
const getGalleryUrl = (payload: GetGalleryQuery): string => {
  return `${getGalleryUrl(payload)}`;
};

export const addGalleryPhoto = (
  payload: AddGalleryPayload
): Promise<GalleryResponse> => {
  const { galleryInfo, agencyId } = payload;
  let formData = new FormData();
  formData.append("name", galleryInfo.name);
  formData.append("file", galleryInfo.file);
  return callApi("POST", `${addGalleryUrl}/${agencyId}`, formData);
};

export const getGalleryPhotos = (
  payload: GetGalleryQuery
): Promise<GalleryListResponse> => {
  return callApi("GET", `${getGalleryUrl(payload)}`);
};

export const removeGalleryPhotos = (payload: string): Promise<boolean> => {
  return callApi("DELETE", `${baseGalleryUrl}/${payload}`);
};
