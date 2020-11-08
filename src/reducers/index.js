import { combineReducers } from "redux";
import imagesUpdateReducer from "./imagesUpdateReducer";
import tagsUpdateReducer from "./tagsUpdateReducer";

import changeQueryReducer from "./changeQueryReducer";

export default combineReducers({
  images: imagesUpdateReducer,
  query: changeQueryReducer,
  tags: tagsUpdateReducer,
});
