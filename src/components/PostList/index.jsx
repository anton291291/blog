import React from 'react';
import {Postitem} from '../index';
import { Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import "./PostList.scss"

const useStyles = makeStyles(theme => ({
  fab: {
    marginTop: "30px",
    marginBottom: "30px",
    left: "47%",
  }
}));

const PostList = ({posts,onRemove}) => {

  const classes = useStyles();

  return (
    <>
      <ScrollAnimation
        animateIn='fadeIn'
        duration={5}
        delay={1000}
        animateOnce={true}
      >
        <Link to="/editor">
          <Fab color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Link>
      </ScrollAnimation>
        <div className="post-items">
          {
            posts.map((post) => {
              return <Postitem {...post} key={post._id} onRemove={onRemove}/>
            })
          }
        </div>
    </>
  );
}

export default PostList;
