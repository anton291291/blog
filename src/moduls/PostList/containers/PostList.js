import React, {useEffect} from 'react';
import {connect } from 'react-redux';
import {HollowDotsSpinner} from 'react-epic-spinners';

import {PostList} from '../../../components';
import {HeaderBlock} from '../../index';
import PostListActions from '../actions';

const PostListContainer = (props) => {

  const {fetchPosts, fetchDeletePost,isLoading} = props;

useEffect(() => {
  fetchPosts();
},[]);

  return (
    !isLoading ?
    <>
      <HeaderBlock/><PostList {...props} onRemove={fetchDeletePost}/>
    </>
       :
      <HollowDotsSpinner
        color='#f50057'
        size='30'
        animationDuration='1000'
        className="preloader"
      />
     )
};

const mapStateToProps = ({posts}) => {
return posts};

export default connect(
  mapStateToProps,
  PostListActions
)(PostListContainer);
