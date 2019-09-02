import React from 'react';
import {Postitem} from '../index';
import { Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import  Cancel  from '@material-ui/icons/Cancel';

import "./PostList.scss"

const useStyles = makeStyles(theme => ({
  fab: {
    marginTop: "30px",
    marginBottom: "30px",
    left: "47%",
  },
  button: {
    fontSize: "10px",
    borderRadius: '0',
    marginLeft: '20px',
    width: '100px'
  },
}));

const PostList = ({posts,onRemove,isAuthenticated,isFiltered,fetchPosts}) => {

  const classes = useStyles();

  return (
    <>
      {isAuthenticated
        ?
          <ScrollAnimation
            animateIn='fadeIn'
            duration={3}
            delay={1000}
            animateOnce={true} >
            <Link to="/editor">
              <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Link>
          </ScrollAnimation>
        :
        null
      }
      {isFiltered
        ?
          <ScrollAnimation
            animateIn='fadeIn'
            duration={2}
            offset={10}
          >
            <p className="filter-block">
              <span className="filter-block__info">
                Найдено постов по ключевому слову: {posts.length}
              </span>

              <Button variant="contained" color="secondary"
                size="small"
                className={classes.button}
                onClick={fetchPosts}
              >
                <Cancel/> сбросить
              </Button>
        </p>
        </ScrollAnimation>
       :
         null
      }
        <div className="post-items">
          {
            posts.map((post) => {
              return <Postitem {...post} key={post._id}
                isAuthenticated={isAuthenticated}
                isFiltered={isFiltered}
                 onRemove={onRemove}/>
            })
          }
        </div>
    </>
  );
}

export default PostList;
