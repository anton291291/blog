import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {HollowDotsSpinner} from 'react-epic-spinners';

import {HeaderBlock} from '../../index';
import {FullPost} from '../../../components';
import PostListActions from '../../PostList/actions';
import UserAuthActions from '../../UserLogin/actions';

const FullPostContainer = (props) => {

  const {modalOn,fetchPosts, isFiltered, history, posts} = props;

  useEffect(() => {
    if (!isFiltered ) {
      fetchPosts();}
  },[]
  )

  useEffect(() => {
      if (sessionStorage.getItem('search') && sessionStorage.getItem('search').length > 0 ) {
        history.push('/posts')
      }
  },[sessionStorage.getItem('search')]);

  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  useEffect(() => {
    modalOn(false)
  },[]);

  return (
    posts
    ?
      <>
        <HeaderBlock {...props} />
        <FullPost {...props} />
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

const mapStateToProps = ({posts, auth,modal},{match: {params:{id}}}) => {
  return {
    posts: posts.posts.filter(post => post._id === id)[Array.length - 1],
    isLoading: posts.isLoading,
    isAuthenticated: auth.isAuthenticated,
    isFiltered: posts.isFiltered,
    ...modal
  }
};

const mapDispatchToProps = {
  ...PostListActions,
  ...UserAuthActions
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FullPostContainer)
);
