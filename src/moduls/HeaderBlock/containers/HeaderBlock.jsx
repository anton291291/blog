import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {UserLogin} from '../../index';
import {HeaderBlock} from '../../../components/index';

import UserAuthActions from '../../UserLogin/actions';
import PostListActions from '../../PostList/actions';

const HeaderBlockContainer = (props) => {

  const {isAuthenticated,logoutUser,history,
  toggleModal,isModalOn,fetchPosts,modalOn} = props;

  return (
    <>
      <HeaderBlock
        {...props}
        onRegisterLink={() => {
          history.push('/register')
          fetchPosts()
          modalOn(false)
        }}
        isAuthenticated={isAuthenticated}
        onLogin={() => {toggleModal(!isModalOn)}}
        onLogout={() => {
          logoutUser(history)
        }}/>
      {isModalOn ? <UserLogin/>: null}
    </>
      );
};

const mapStateToProps = ({posts,modal},{location: {pathname}}) => {
  const id = pathname.split('/posts/')[1];
  return {
    ...posts.posts.filter(post => post._id === id)[0],
    ...posts,
    ...modal,

  }
};

const mapDispatchToProps = {
  ...PostListActions,
  ...UserAuthActions
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderBlockContainer)
);
