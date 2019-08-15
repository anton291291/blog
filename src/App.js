import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import {HeaderBlock, AddForm, NotFound} from './components/index';
import {PostList, FullPost} from './moduls/index'

function App() {
  return (
    <div className="App">
      <HeaderBlock
        title="Заголовок сайта"
        description="Описание"
        imageUrl="https://images.unsplash.com/photo-1562592199-8aed6ae5252d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
      />
      <div className="container">
        <div className="content">
          <Router>
            <div>
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
                  path="*"
                  component={NotFound}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
