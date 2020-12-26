import { ListQuery } from "provider/models/common";
import {
  AddGalleryPayload,
  GalleryListResponse,
  GalleryResponse,
} from "provider/models/gallery";
import {
  deleteGalleryImageUrl,
  getGalleryImages,
  uploadGalleryUrl,
} from "./apiUrl";
import { callApi, callUploadApi } from "./base";

// const baseGalleryUrl = baseApiUrl + "/gallery";
// const addGalleryUrl = baseGalleryUrl + "/add";
// const getGalleryUrl = (payload: GetGalleryQuery): string => {
//   return `${getGalleryUrl(payload)}`;
// };

/// I DO THE MOCK RESPONSE HERE TO WAIT THE REAL API

export const addGalleryPhoto = (
  payload: AddGalleryPayload
): Promise<GalleryResponse> => {
  const { title, image, agencyId } = payload;
  let formData = new FormData();
  formData.append("title", title);
  formData.append("file", image);
  formData.append("agencyId", agencyId);

  return callUploadApi("POST", uploadGalleryUrl, formData);
};

export const getGalleryPhotos = (
  payload: ListQuery
): Promise<GalleryListResponse> => {
  return callApi("GET", `${getGalleryImages(payload)}`);
};

export const removeGalleryPhotos = (payload: string): Promise<string> => {
  return callApi("DELETE", `${deleteGalleryImageUrl(payload)}`);
  // return callApi("DELETE", `${baseGalleryUrl}/${payload}`);
};
