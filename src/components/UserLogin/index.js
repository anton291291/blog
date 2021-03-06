import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './UserLogin.scss'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
     width: '10px',
     margin:' 10px auto',
     borderRadius: '0'

   }
}));

const UserLogin = (props) => {

  const {onSubmit,email,password, onChangeEmail,
  onChangePassword, emailValid, passwordValid,emailError,
  passwordError,onClick}= props;

   const classes = useStyles();

  return (

      <div className='login-block'>
        <form className={classes.container}>
          <span onClick={onClick}
          class='login-block__close'>×</span>
          <TextField
            autoFocus='true'
            id='outlined-email-input'
            label='Email'
            className={classes.textField}
            type='email'
            name='email'
            autoComplete='email'
            margin='normal'
            variant='outlined'
            value={email}
            onChange={onChangeEmail}
            error={emailError}
          />
        <span className='login-block__errors'>{emailValid}</span>
          <TextField
            id='outlined-password-input'
            label='Пароль'
            className={classes.textField}
            type='password'
            margin='normal'
            variant='outlined'
            value={password}
            onChange={onChangePassword}
            error={passwordError}
          />
        <span className='login-block__errors'>{passwordValid}</span>
          <Button variant='contained'
            color='primary'
            className={classes.button}
            onClick={onSubmit}
          >
            Войти
          </Button>
        </form>
      </div>


  );
};

export default  UserLogin;
