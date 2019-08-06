import React from 'react';

import {HeaderBlock, Postitem} from './components/index';

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
        <form className="add-form">
          <div className = "form-group" >
          <h4>
            <label for="title">
              Title
            </label>
          </h4>
          <input
            type="email"
            className="form-control"
            id="title"
            placeholder="Enter email"/>
        </div>
        <div className="add-form__row">
          <h4>
            <label for="image">
              Image URL
            </label>
          </h4>
          <input
            className="form-control"
            id="image"
            placeholder="Enter image URL"/>
        </div>
        <div className="add-form__row">
          <h4>
            <label for="description">
              Description
            </label>
          </h4>
          <textarea
            rows="8"
            className="form-control"
            id="description"
            placeholder="Enter text"/>
        </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    < /form>
    <div className="post-items">
      <Postitem
        title="Заголовок статьи"
        createdAt={"" + new Date()}
        _id="1"
       />
    </div>
      </div>
    </div>
    </div>
  );
}

export default App;
