import { UPDATE_IMAGES} from '../actions/types';

const initialState ={};

export default function(state = initialState, action) {

  switch (action.type) {
    case  UPDATE_IMAGES:
      return {
        ...state,
images:action.payload
      }
      default: 
      return state;
  }
}
