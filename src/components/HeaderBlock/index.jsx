import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import {UserLogin} from '../../moduls/index';

import "./HeaderBlock.scss";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    position: "relative",
    zIndex: "99",
    top: "-150px",
    left: "-90px",
  },
}));

const HeaderBlock = ({title, imageUrl}) => {

  const [modal,setModal] = useState(false);

  const classes = useStyles();

  return (
    <ScrollAnimation
      animateIn='fadeIn'
      duration={3}
      animateOnce={true}
    >
      <div className="header-block" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="container">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {setModal(!modal)}}
            className={classes.button}>
            Войти
          </Button>
          <div className="header-block__overlay"></div>
          <div className="header-block__center">
            <h1>{title}</h1>
          </div>
        </div>
        {modal ? <UserLogin/>: null}
      </div>
    </ScrollAnimation>
  );
};

          HeaderBlock.defaultProps = {
  title: 'Мои путешествия',
  imageUrl: 'https://images.unsplash.com/photo-1562592199-8aed6ae5252d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80'
};

export default HeaderBlock;
