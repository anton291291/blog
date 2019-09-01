import React, {useState} from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserLoginActions from '../actions';
import {UserLogin} from '../../../components';

const UserLoginContainer = (props) => {

  const {loginUser, payload,isModalOn,toggleModal,deleteLoginError} = props;

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginData= {
    "email": email,
    "password": password
  };

  return (
    <UserLogin
      onClick={() => {
        deleteLoginError();
        toggleModal(!isModalOn);
      }}
      email={email}
      emailValid={payload === undefined ? null : payload.email}
      emailError={payload !== undefined && payload.hasOwnProperty('email') ? true : false}
      passwordError={payload !== undefined && payload.hasOwnProperty('password') ? true : false}
      passwordValid={payload === undefined ? null : payload.password}
      password={password}
      onSubmit={() => {
        loginUser(loginData,!isModalOn)

      }}
      onChangeEmail={(e) => {
        setEmail(e.target.value)
      }}
      onChangePassword={(e) => {
        setPassword(e.target.value)
      }}
    />
  );
};


const mapStateToProps = ({errors,modal,auth}) => {
return {
  ...errors,
  ...modal,
  ...auth
  }
};

export default connect(
  mapStateToProps,
  UserLoginActions
)(UserLoginContainer);
