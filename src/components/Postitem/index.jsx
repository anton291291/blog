import React from 'react';
import {Link} from "react-router-dom";

import "./Postitem.scss";
import ScrollAnimation from 'react-animate-on-scroll';

import moment from 'moment';
import 'moment/locale/ru'

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  fab: {
    marginLeft: "40px",
    marginBottom: "8px",
    position: "absolute",
    marginTop: "-28px"
  },

  deleteBlock: {
    left: "60%"
  },

  editBlock: {
    left: "50%"
  }
}));

const Postitem = ({title,createdAt,_id,onRemove,isAuthenticated}) => {
  const classes = useStyles();

  moment.locale('ru');

  return (
    <div className="post-item">
      <ScrollAnimation
        animateIn='fadeIn'
        duration={2.5}
      >
        <Link to={`/posts/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p>
          <i>Пост создан {moment(createdAt).format('LLL')}</i>

          {isAuthenticated
            ?
            <>
            <ScrollAnimation
              animateIn='fadeIn'
              duration={2.5}
              offset={50}
            >
            <Link to={`/posts/${_id}/edit`}>
              <Fab color="secondary"
                aria-label="edit"
                className={`${classes.fab} ${classes.editBlock}`}
                size="small"
              >
                <Icon>edit_icon</Icon>
              </Fab>
            </Link>
            <Fab aria-label="delete"
              onClick={onRemove.bind(this, _id)}
              className={`${classes.fab} ${classes.deleteBlock}`}
              size="small"
            >
              <DeleteIcon />
            </Fab>
            </ScrollAnimation>
            </>
          : null}

        </p>
      </ScrollAnimation>
    </div>
  );
}

export default Postitem;
