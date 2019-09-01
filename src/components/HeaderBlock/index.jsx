import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';

import {SearchInput} from '../index';

import "./HeaderBlock.scss";


const useStyles = makeStyles(theme => ({
  button: {
    boxShadow: 'none',
    position: "relative",
    zIndex: "99",
    top: "-150px",
    left: "-20px",
    fontSize: "10px",
    borderRadius: '0',
    width: '100px'
  },
}));

const HeaderBlock = (props) => {

  const {title, imageUrl,onClick,isAuthenticated,onLogout,history, fetchSearchPosts}= props;
  const classes = useStyles();

  return (
    <ScrollAnimation
      animateIn='fadeIn'
      duration={3}
      animateOnce={true}
    >
      <div className="header-block" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="container">
          <SearchInput {...props}/>
          {!isAuthenticated
           ? <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push('/register')
            }}
            className={classes.button}>
            Регистрация
          </Button>
            : <Button className={classes.button} disabled/>
          }
          {isAuthenticated
            ?
            <Button
              variant="contained"
              color="secondary"
              onClick={onLogout}
              className={classes.button}>
              Выйти
            </Button>
            :
            <Button
              variant="contained"
              color="primary"
              onClick={onClick}
              className={classes.button}>
              Войти
            </Button>
        }
          <div className="header-block__overlay"></div>
          <div className="header-block__center">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

HeaderBlock.defaultProps = {
  title: 'Мои путешествия',
  imageUrl: 'https://images.unsplash.com/photo-1562592199-8aed6ae5252d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80'
};

export default HeaderBlock;
