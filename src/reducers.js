import {combineReducers} from 'redux'

import posts from './moduls/PostList/reducer';
import auth from './moduls/UserLogin/reducer';

export default combineReducers({
  posts,
  errors: auth
});
