import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./FullPost.scss"

const FullPost = ({text,createdAt}) => {
  return (
    <div className="full-post">
      <div className="container">
        <Link to="/">
          <Button variant="contained" color="secondary" size="medium">
            Назад
          </Button>
        </Link>
        <div className="full-post__details">
          <i>Пост создан {createdAt}</i>
        </div>
        <br />
        <p className="full-post__text">{text}</p>
      </div>
    </div>
)
}

export default FullPost;
