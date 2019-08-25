import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import {NotFound} from './components/index';
import {PostList, FullPost, HeaderBlock, AddForm,PostEditor} from './moduls/index'

function App() {
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
