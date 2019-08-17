import React from 'react';
import {Link} from "react-router-dom";
import "./Postitem.scss";

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  fab: {
    marginLeft: "30px",
    marginBottom: "8px"
  },
}));

const Postitem = ({title,createdAt,_id,onRemove}) => {
  const classes = useStyles();
  return (
    <div className="post-item">
      <Link to={`/posts/${_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        <i>Пост создан {createdAt}</i>
        <Link to={`/posts/${_id}/edit`}>
          <Fab color="secondary"
            aria-label="edit"
            className={classes.fab}
            size="small"
          >
            <Icon>edit_icon</Icon>
          </Fab>
        </Link>
        <Fab aria-label="delete"
          onClick={onRemove.bind(this, _id)}
          className={classes.fab}
        size="small">
          <DeleteIcon />
        </Fab>
      </p>
    </div>
  );
}

export default Postitem;
