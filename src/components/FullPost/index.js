import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import moment from 'moment';
import 'moment/locale/ru'

import  ArrowBack  from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import './FullPost.scss'
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
 button: {
    margin:' 20px auto',
    borderRadius: '0',
    fontSize: '10px'
  }
}));

const FullPost = ({text,createdAt}) => {

  const classes = useStyles();

  moment.locale('ru');

  return (
    <ScrollAnimation
      animateIn='fadeIn'
      duration={2}
    >
      <div className='full-post'>
        <div className='container'>
          <Link to='/'>
            <Button variant='contained' color='secondary'
              size='small'
              className={classes.button} >
              <ArrowBack/>
          </Button>
        </Link>
        <div className='full-post__details'>
          <i>Пост создан {moment(createdAt).format('LLL')}</i>
        </div>
        <br />
        <p className='full-post__text'>{text}</p>
      </div>
    </div>
    </ScrollAnimation>
)
}

export default FullPost;
