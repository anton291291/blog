import React, {useEffect} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {UserLogin} from '../../index';
import {HeaderBlock} from '../../../components/index';

import UserLoginActions from '../../UserLogin/actions';
import PostListActions from '../../PostList/actions';

const HeaderBlockContainer = (props) => {

  const {isAuthenticated,logoutUser,history,toggleModal,isModalOn} = props;


  return (
    <>
      <HeaderBlock
        {...props}
        isAuthenticated={isAuthenticated}
        onClick={() => {toggleModal(!isModalOn)}}
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
  ...UserLoginActions
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderBlockContainer)
);
