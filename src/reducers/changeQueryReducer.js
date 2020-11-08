import { CHANGE_QUERY } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
}
