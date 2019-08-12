import React, {useState, useEffect} from 'react';
import {connect } from 'react-redux';
import {PostList} from '../../../components';
import PostListActions from '../actions';

const PostListContainer = (props) => {
useEffect(() => {
  const {fetchPosts} = props;
  fetchPosts();
},[]);

  return <PostList posts={props.posts} />
};

export default connect(
  ({posts}) => posts,
  PostListActions
)(PostListContainer);
