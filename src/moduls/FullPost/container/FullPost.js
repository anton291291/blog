import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {HollowDotsSpinner} from 'react-epic-spinners';

import {HeaderBlock} from '../../index';
import {FullPost} from '../../../components';
import PostListActions from '../../PostList/actions';
import UserLoginActions from '../../UserLogin/actions';

const FullPostContainer = (props) => {

  const {fetchPosts, isLoading} = props;

  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    !isLoading ?
      <> <HeaderBlock {...props} /> <FullPost {...props.posts}/> </>
    :
      <HollowDotsSpinner
        color='#f50057'
        size='30'
        animationDuration='1000'
        className="preloader"
      />
  )
};

const mapStateToProps = ({posts, auth},{match: {params:{id}}}) => {
  return {
    posts: posts.posts.filter(post => post._id === id)[Array.length - 1],
    isLoading: posts.isLoading,
    isAuthenticated: auth.isAuthenticated
  }
};

const mapDispatchToProps = {
  ...PostListActions,
  ...UserLoginActions
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FullPostContainer)
);
