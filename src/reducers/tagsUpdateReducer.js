import { UPDATE_TAGS} from '../actions/types';

const initialState ={};

export default function(state = initialState, action) {

  switch (action.type) {
    case  UPDATE_TAGS:
      return {
        ...state,
tags:action.payload
      }
      default: 
      return state;
  }
}
