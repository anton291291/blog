import {combineReducers} from 'redux'

import posts from './moduls/PostList/reducer';
import forms from './moduls/AddForm/reducer';

export default combineReducers({
  posts,
  forms
});
