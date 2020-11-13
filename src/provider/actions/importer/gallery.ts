import {
  AddGalleryPayload,
  GalleryListResponse,
  GalleryResponse,
  GetGalleryQuery,
} from "provider/models/gallery";

export const ADD_IMAGE = "IMPORTER.ADD_IMAGE";
export const ADD_IMAGE_SUCCESS = "IMPORTER.ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAILURE = "IMPORTER.ADD_IMAGE_FAILURE";
export const GET_GALLERY = "IMPORTER.GET_GALLERY";
export const GET_GALLERY_SUCCESS = "IMPORTER.GET_GALLERY_SUCCESS";
export const GET_GALLERY_FAILURE = "IMPORTER.GET_GALLERY_FAILURE";

export interface AddImageAction {
  type: typeof ADD_IMAGE;
  payload: AddGalleryPayload;
}

interface AddImageSuccessAction {
  type: typeof ADD_IMAGE_SUCCESS;
  payload: GalleryResponse;
}

interface AddImageFailureAction {
  type: typeof ADD_IMAGE_FAILURE;
}

export const addImage = (payload: AddGalleryPayload): AddImageAction => ({
  type: ADD_IMAGE,
  payload,
});

export const addImageSuccess = (
  payload: GalleryResponse
): AddImageSuccessAction => ({
  type: ADD_IMAGE_SUCCESS,
  payload,
});

export const addImageFailure = (): AddImageFailureAction => ({
  type: ADD_IMAGE_FAILURE,
});

export interface GetGalleryAction {
  type: typeof GET_GALLERY;
  payload: GetGalleryQuery;
}

interface GetGallerySuccessAction {
  type: typeof GET_GALLERY_SUCCESS;
  payload: GalleryListResponse;
}

interface GetGalleryFailureAction {
  type: typeof GET_GALLERY_FAILURE;
}

export const getGallery = (payload: GetGalleryQuery): GetGalleryAction => ({
  type: GET_GALLERY,
  payload,
});

export const getGallerySuccess = (
  payload: GalleryListResponse
): GetGallerySuccessAction => ({
  type: GET_GALLERY_SUCCESS,
  payload,
});

export const getGalleryFailure = (): GetGalleryFailureAction => ({
  type: GET_GALLERY_FAILURE,
});
