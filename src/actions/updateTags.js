import {UPDATE_TAGS} from './types';

export const updateTags= (updateTags) => dispatch => {
let tag=updateTags.map(tag=> {return tag});
dispatch({
  type: UPDATE_TAGS,
  payload:tag
});
};