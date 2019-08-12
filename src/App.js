import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import {HeaderBlock, AddForm, FullPost, NotFound} from './components/index';
import {PostList} from './moduls/index'

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
          <button type="button" className="btn btn-primary">
            Add post
          </button>
        </div>
        <div className="content">
          <Router>
            <div>
              <Switch>
                <Route
                  path="/"
                  exact
                  component={() => { return  <PostList
                    posts={[
                      {
                      title:"Заголовок статьи #1",
                      createdAt:"" + new Date(),
                      _id:"1"
                      },
                      {
                      title:"Заголовок статьи #2",
                      createdAt:"" + new Date(),
                      _id:"2"
                      },
                  ]} />
                }} />
              <Route
                path="/post/:id"
                exact
                component={() => {
                return <FullPost
                   text="vvrrtbbrtb"
                   createdAt={"" + new Date()} />
              }} />
              <Route
                path="/post/:id/edit"
                exact
                component={() => {
                  return <AddForm />
                }}
                />
              <Route
                path="*"
                component={NotFound} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
