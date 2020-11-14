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
const mockImageResponse: GalleryResponse = {
  id: "1234",
  title: "New Test",
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
const mockAddedImageResponse = (id: string): GalleryResponse => ({
  id: "1234",
  title: id,
  created: "2020-07-03T03:22:02Z[UTC]",
  key: id,
  largeUrl:
    "https://collecport-images-dev.s3.ap-southeast-2.amazonaws.com/2b1027a6-466c-48e0-9f7d-8e7280cf5ac6:95fcb61f-ba13-43c7-8059-051dfacb6808-large.jpeg",
  mediumUrl:
    "https://collecport-images-dev.s3.ap-southeast-2.amazonaws.com/2b1027a6-466c-48e0-9f7d-8e7280cf5ac6:95fcb61f-ba13-43c7-8059-051dfacb6808-medium.jpeg",
  originalUrl:
    "https://collecport-images-dev.s3.ap-southeast-2.amazonaws.com/2b1027a6-466c-48e0-9f7d-8e7280cf5ac6:95fcb61f-ba13-43c7-8059-051dfacb6808-original.jpeg",
  productId: "2b1027a6-466c-48e0-9f7d-8e7280cf5ac6",
  thumbUrl:
    "https://collecport-images-dev.s3.ap-southeast-2.amazonaws.com/2b1027a6-466c-48e0-9f7d-8e7280cf5ac6:95fcb61f-ba13-43c7-8059-051dfacb6808-thumb.jpeg",
});
export const addGalleryPhoto = (
  payload: AddGalleryPayload
): Promise<GalleryResponse> => {
  const { title, image } = payload;
  let formData = new FormData();
  formData.append("title", title);
  formData.append("file", image);

  const mockId = Math.floor(Math.random() * 1000000);
  return new Promise<GalleryResponse>((resolve) => {
    setTimeout(() => {
      resolve(mockAddedImageResponse(mockId.toString()));
    }, 1000);
  });
  // return callApi("POST", `${addGalleryUrl}/`, formData);
};

export const getGalleryPhotos = (
  payload: GetGalleryQuery
): Promise<GalleryListResponse> => {
  return new Promise<GalleryListResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data: { totalCount: 1, images: [mockImageResponse] },
      });
    }, 1000);
  });
  // return callApi("GET", `${getGalleryUrl(payload)}`);
};

export const removeGalleryPhotos = (payload: string): Promise<boolean> => {
  return callApi("DELETE", `${baseGalleryUrl}/${payload}`);
};
