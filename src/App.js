import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './core/setAuthToken';

import UserLoginActions from './moduls/UserLogin/actions';

import {NotFound} from './components/index';
import {PostList, FullPost,AddForm,PostEditor, UserRegister} from './moduls/index'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(UserLoginActions.setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(UserLoginActions.logoutUser());
    window.location.href = '/posts'
  }
}


const  App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="content">
            <Switch>
              <Route
                path="/"
                exact
                component={PostList}
              />
              <Route
                path="/posts/:id"
                exact
                component={FullPost}
              />
              <Route
                path="/editor"
                exact
                component={AddForm}
              />
              <Route
                path="/posts/:id/edit"
                exact
                component={PostEditor}
              />
              <Route exact path="/register"
                component={ UserRegister }
              />
              <Route
                path="*"
                component={NotFound}
              />
                  </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
