import React from 'react';
import {Postitem} from '../index';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import "./PostList.scss"

const useStyles = makeStyles(theme => ({
  fab: {
    marginBottom: "30px",
    left: "47%",
  }
}));

const PostList = ({posts,onRemove}) => {

  const classes = useStyles();

  return (
    <>
      <Link to="/editor">
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
      <div className="post-items">
        { posts ?
          posts.map((post) => {
            return <Postitem {...post} onRemove={onRemove}/>
          }) : "Загрузка..."
        }
      </div>
    </>
  );
}

export default PostList;
