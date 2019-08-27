import React, {useState} from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserLoginActions from '../actions';
import {UserLogin} from '../../../components';

const UserLoginContainer = (props) => {

  const {loginUser, payload} = props;

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginData= {
    "email": email,
    "password": password
  };
console.log(payload == undefined ? null : payload.email);
  return (
    <UserLogin
      email={email}
      emailValid={payload == undefined ? null : payload.email}
      emailError={payload == undefined ? false : true}
      passwordError={payload == undefined ? false : true}
      passwordValid={payload == undefined ? null : payload.password}
      password={password}
      onSubmit={() => {
        loginUser(loginData)
        console.log(loginData);
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

UserLoginContainer.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = ({errors}) => {
  console.log(errors);
return errors};

export default connect(
  mapStateToProps,
  UserLoginActions
)(UserLoginContainer);
