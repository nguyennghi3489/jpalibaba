import {
  ADD_IMAGE,
  ADD_IMAGE_SUCCESS,
  GET_GALLERY,
  GET_GALLERY_SUCCESS,
  REMOVE_IMAGE,
  REMOVE_IMAGE_SUCCESS,
} from "provider/actions";
import { GalleryResponse } from "provider/models";

export interface GalleryState {
  images: GalleryResponse[];
  total: number;
  processing: boolean;
  reset: boolean;
}

export const initialState: GalleryState = {
  images: [],
  total: 0,
  processing: false,
  reset: false,
};

export const gallery = (
  state: GalleryState = initialState,
  action: any
): GalleryState => {
  switch (action.type) {
    case GET_GALLERY:
    case REMOVE_IMAGE: {
      return { ...state, processing: true };
    }
    case ADD_IMAGE: {
      return { ...state, processing: true, reset: false };
    }
    case GET_GALLERY_SUCCESS:
      return action.payload.data;

    case ADD_IMAGE_SUCCESS: {
      const newImages = [action.payload, ...state.images];
      return { ...state, images: newImages, processing: false, reset: true };
    }
    case REMOVE_IMAGE_SUCCESS: {
      const newImages = state.images.filter(
        (item) => item.key !== action.payload
      );
      return { ...state, images: newImages, processing: false };
    }
    default:
      return state;
  }
};
