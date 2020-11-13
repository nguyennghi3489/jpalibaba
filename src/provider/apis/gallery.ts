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

/// I DO THE MOCK RESPONSE HERE TO WAIT THE REAL API
const mockAddImageResponse: GalleryResponse = {
  id: "1234",
  created: "2020-07-03T03:22:02Z[UTC]",
  key: "95fcb61f-ba13-43c7-8059-051dfacb6808",
  largeUrl:
    "https://collecport-images-dev.s3.ap-southeast-2.amazonaws.com/2b1027a6-466c-48e0-9f7d-8e7280cf5ac6:95fcb61f-ba13-43c7-8059-051dfacb6808-large.jpeg",
  mediumUrl:
    "https://collecport-images-dev.s3.ap-southeast-2.amazonaws.com/2b1027a6-466c-48e0-9f7d-8e7280cf5ac6:95fcb61f-ba13-43c7-8059-051dfacb6808-medium.jpeg",
  originalUrl:
    "https://collecport-images-dev.s3.ap-southeast-2.amazonaws.com/2b1027a6-466c-48e0-9f7d-8e7280cf5ac6:95fcb61f-ba13-43c7-8059-051dfacb6808-original.jpeg",
  productId: "2b1027a6-466c-48e0-9f7d-8e7280cf5ac6",
  thumbUrl:
    "https://collecport-images-dev.s3.ap-southeast-2.amazonaws.com/2b1027a6-466c-48e0-9f7d-8e7280cf5ac6:95fcb61f-ba13-43c7-8059-051dfacb6808-thumb.jpeg",
};
export const addGalleryPhoto = (
  payload: AddGalleryPayload
): Promise<GalleryResponse> => {
  const { name, image } = payload;
  let formData = new FormData();
  formData.append("name", name);
  formData.append("file", image);

  return new Promise<GalleryResponse>((resolve) => {
    setTimeout(() => {
      resolve(mockAddImageResponse);
    }, 1000);
  });
  // return callApi("POST", `${addGalleryUrl}/`, formData);
};

export const getGalleryPhotos = (
  payload: GetGalleryQuery
): Promise<GalleryListResponse> => {
  return callApi("GET", `${getGalleryUrl(payload)}`);
};

export const removeGalleryPhotos = (payload: string): Promise<boolean> => {
  return callApi("DELETE", `${baseGalleryUrl}/${payload}`);
};
