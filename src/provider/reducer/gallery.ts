import { ADD_IMAGE_SUCCESS, GET_GALLERY_SUCCESS } from "provider/actions";
import { GalleryResponse } from "provider/models";

export interface GalleryState {
  images: GalleryResponse[];
  total: number;
}

export const initialState: GalleryState = {
  images: [],
  total: 0,
};

export const gallery = (
  state: GalleryState = initialState,
  action: any
): GalleryState => {
  switch (action.type) {
    case GET_GALLERY_SUCCESS:
      return action.payload.data;

    case ADD_IMAGE_SUCCESS:
      const newImages = [action.payload, ...state.images];
      return { images: newImages, total: state.total };
    default:
      return state;
  }
};
