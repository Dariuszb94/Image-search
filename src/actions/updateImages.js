import { UPDATE_IMAGES } from "./types";

export const updateImages = (updateImages) => (dispatch) => {
  let image = updateImages.map((image) => {
    return image;
  });
  dispatch({
    type: UPDATE_IMAGES,
    payload: image,
  });
};
