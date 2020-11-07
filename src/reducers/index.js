import { combineReducers } from 'redux';
import imagesUpdateReducer from './imagesUpdateReducer';
import changeQueryReducer from './changeQueryReducer';



export default combineReducers({
images :imagesUpdateReducer,
query:changeQueryReducer

});