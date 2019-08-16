import React from 'react';
import {Postitem} from '../index';

import "./PostList.scss"

const PostList = ({posts,onRemove}) => {
  return (
    <div className="post-items">
      { posts ?
        posts.map((post) => {
          return <Postitem {...post} onRemove={onRemove}/>
        }) : "Загрузка..."
      }
    </div>
  );
}

export default PostList;
