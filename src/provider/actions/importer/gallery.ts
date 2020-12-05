import { ListQuery } from "provider/models/common";
import {
  AddGalleryPayload,
  GalleryListResponse,
  GalleryResponse,
} from "provider/models/gallery";

export const ADD_IMAGE = "IMPORTER.ADD_IMAGE";
export const ADD_IMAGE_SUCCESS = "IMPORTER.ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAILURE = "IMPORTER.ADD_IMAGE_FAILURE";
export const GET_GALLERY = "IMPORTER.GET_GALLERY";
export const GET_GALLERY_SUCCESS = "IMPORTER.GET_GALLERY_SUCCESS";
export const GET_GALLERY_FAILURE = "IMPORTER.GET_GALLERY_FAILURE";
export const REMOVE_IMAGE = "IMPORTER.REMOVE_IMAGE";
export const REMOVE_IMAGE_SUCCESS = "IMPORTER.REMOVE_IMAGE_SUCCESS";
export const REMOVE_IMAGE_FAILURE = "IMPORTER.REMOVE_IMAGE_FAILURE";

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
  payload: ListQuery;
}

interface GetGallerySuccessAction {
  type: typeof GET_GALLERY_SUCCESS;
  payload: GalleryListResponse;
}

interface GetGalleryFailureAction {
  type: typeof GET_GALLERY_FAILURE;
}

export const getGallery = (payload: ListQuery): GetGalleryAction => ({
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

export interface RemoveImageAction {
  type: typeof REMOVE_IMAGE;
  payload: string;
}

interface RemoveImageSuccessAction {
  type: typeof REMOVE_IMAGE_SUCCESS;
  payload: string;
}

interface RemoveImageFailureAction {
  type: typeof REMOVE_IMAGE_FAILURE;
}

export const removeGallery = (payload: string): RemoveImageAction => ({
  type: REMOVE_IMAGE,
  payload,
});

export const removeGallerySuccess = (
  payload: string
): RemoveImageSuccessAction => ({
  type: REMOVE_IMAGE_SUCCESS,
  payload,
});

export const removeGalleryFailure = (): RemoveImageFailureAction => ({
  type: REMOVE_IMAGE_FAILURE,
});
