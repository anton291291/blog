import { applyMiddleware, createStore, combineReducers, compose, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, middleware);

export default store;
