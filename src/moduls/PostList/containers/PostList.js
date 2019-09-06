 import React, {useEffect} from 'react';
import {connect } from 'react-redux';
import {HollowDotsSpinner} from 'react-epic-spinners';

import {PostList} from '../../../components';
import {HeaderBlock} from '../../index';

import PostListActions from '../actions';
import UserLoginActions from '../../UserLogin/actions'

const PostListContainer = (props) => {

  const {fetchPosts, fetchDeletePost,isLoading, isAuthenticated, isFiltered} = props;

useEffect(() => {
  isFiltered ? console.log() :fetchPosts();
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

const mapStateToProps = ({posts,auth}) => {
return {...posts,...auth}};

const mapDispatchToProps = {
  ...UserLoginActions,
  ...PostListActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
