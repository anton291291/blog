import React, {useEffect} from 'react';
import {connect } from 'react-redux';
import {PostList} from '../../../components';
import PostListActions from '../actions';

const PostListContainer = (props) => {
useEffect(() => {
  const {fetchPosts} = props;
  fetchPosts();
},[]);
  const {fetchDeletePost}= props;
  return <PostList {...props} onRemove={fetchDeletePost}/>
};

export default connect(
  ({posts}) => posts,
  PostListActions
)(PostListContainer);
