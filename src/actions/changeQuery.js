import { CHANGE_QUERY } from "./types";

export const changeQuery = (changeQuery) => (dispatch) => {
  let query = changeQuery;
  dispatch({
    type: CHANGE_QUERY,
    payload: query,
  });
};
