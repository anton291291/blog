import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import {AddForm, NotFound} from './components/index';
import {PostList, FullPost, HeaderBlock} from './moduls/index'

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderBlock/>
        <div className="container">
          <div className="content">
            <Switch>
              <Route
                path="/"
                exact
                component={() => {
                  return  <PostList
                          />
                }}
              />
              <Route
                path="/posts/:id"
                exact
                component={() => {
                  return <FullPost
                         />
                }}
              />
              <Route
                path="/posts/:id/edit"
                exact
                component={() => {
                  return <AddForm />
                }}
              />
              <Route
                path="/posts/edit"
                exact
                component={() => {
                  return <AddForm />
                }}
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
