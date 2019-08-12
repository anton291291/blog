import React from 'react';
import {Postitem} from '../index';

import "./PostList.scss"

const PostList = ({posts}) => {
  return (
    <div className="post-items">
      { posts ?
        posts.map((post) => {
          return <Postitem {...post} />
        }) : "Loading..."
      }
    </div>
  );
}

export default PostList;
