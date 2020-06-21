import { Campaign } from "provider/models";

export const ADD_IMAGE = "IMPORTER.ADD_IMAGE";
export const ADD_IMAGE_SUCCESS = "IMPORTER.ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAILURE = "IMPORTER.ADD_IMAGE_FAILURE";

export interface AddImageAction {
  type: typeof ADD_IMAGE;
  payload: File;
}

interface AddImageSuccessAction {
  type: typeof ADD_IMAGE_SUCCESS;
  payload: string;
}

interface AddImageFailureAction {
  type: typeof ADD_IMAGE_FAILURE;
}

export const addImage = (payload: File): AddImageAction => ({
  type: ADD_IMAGE,
  payload,
});

export const addImageSuccess = (payload: string): AddImageSuccessAction => ({
  type: ADD_IMAGE_SUCCESS,
  payload,
});

export const addImageFailure = (): AddImageFailureAction => ({
  type: ADD_IMAGE_FAILURE,
});
