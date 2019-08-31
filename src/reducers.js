import {combineReducers} from 'redux'

import posts from './moduls/PostList/reducer';
import errorReducer from './moduls/UserLogin/reducers/errorReducer';
import authReducer from './moduls/UserLogin/reducers/authReducer';
import modalReducer from './moduls/UserLogin/reducers/modalReducer';

export default combineReducers({
  posts,
  errors: errorReducer,
  auth: authReducer,
  modal: modalReducer,
});
