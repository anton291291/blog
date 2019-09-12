 import React, {useEffect} from 'react';
import {connect } from 'react-redux';
import {HollowDotsSpinner} from 'react-epic-spinners';

import {PostList} from '../../../components';
import {HeaderBlock} from '../../index';

import PostListActions from '../actions';
import UserAuthActions from '../../UserLogin/actions'

const PostListContainer = (props) => {

  const {modalOn,fetchPosts, fetchDeletePost,isLoading, isAuthenticated, isFiltered} = props;

  useEffect(() => {
    isFiltered ? console.log() :fetchPosts();
  },[]);

  useEffect(() => {
    modalOn(false)
  },[]);

  return (
    !isLoading ?
    <>
      <HeaderBlock
        isAuthenticated={isAuthenticated}
      />
      <PostList {...props}
        onRemoveSearch={() => {
          fetchPosts();
          sessionStorage.setItem('search','')
        }}
        onRemovePost={fetchDeletePost}
        onRemoveSessionStorage={() => {
          sessionStorage.setItem('search','')
        }}
      />
    </>
       :
      <HollowDotsSpinner
        color='#f50057'
        size='30'
        animationDuration='1000'
        className='preloader'
      />
     )
};

const mapStateToProps = ({posts,auth,modal}) => {
return {
  ...posts,
  ...auth,
  ...modal
}};

const mapDispatchToProps = {
  ...UserAuthActions,
  ...PostListActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
