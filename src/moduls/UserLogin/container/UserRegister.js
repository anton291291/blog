import React, {useState, useEffect} from 'react';
import {connect } from 'react-redux';

import UserAuthActions from '../actions';
import {UserRegister} from '../../../components';

const UserRegisterContainer = (props) => {

  const {registerUser, payload,isModalOn,history, isAuthenticated,deleteLoginError} = props;

  useEffect(() => {
    isAuthenticated ? history.push('/posts') : console.log('good');
  })

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [passwordConfirm,setPasswordConfirm] = useState('');

  const registerData= {
    'name': name,
    'email': email,
    'password': password,
    'password_confirm': passwordConfirm
  };

  return (
    <UserRegister
      deleteLoginError={deleteLoginError}
      name={name}
      nameError={payload !== undefined && payload.hasOwnProperty('name') ? true : false}
      nameValid={payload === undefined ? null : payload.name}
      onChangeName={(e) => {
        setName(e.target.value)
      }}

      email={email}
      emailValid={payload === undefined ? null : payload.email}
      emailError={payload !== undefined && payload.hasOwnProperty('email') ? true : false}
      onChangeEmail={(e) => {
        setEmail(e.target.value)
      }}

      passwordError={payload !== undefined && payload.hasOwnProperty('password') ? true : false}
      passwordValid={payload === undefined ? null : payload.password}
      password={password}
      onChangePassword={(e) => {
        setPassword(e.target.value)
      }}
      onChangePasswordConfirm={(e) => {
        setPasswordConfirm(e.target.value)
      }}

      passwordConfirm={passwordConfirm}
      passwordConfirmError={payload !== undefined && payload.hasOwnProperty('password_confirm') ? true : false}
      passwordConfirmValid={payload === undefined ? null : payload.password_confirm}

      onSubmit={() => {
        registerUser(registerData,!isModalOn)
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
  UserAuthActions
)(UserRegisterContainer);
