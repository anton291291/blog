import React from 'react';
import {Link} from "react-router-dom"
import "./Postitem.scss"

const Postitem = ({title,createdAt,_id,onRemove}) => {
  return (
    <div className="post-item">
      <Link to={`/posts/${_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        <i>Пост создан {createdAt}</i>
        <a href="javascript://" onClick={onRemove.bind(this, _id)}>
          Удалить
        </a>
      <Link to={`/posts/${_id}/edit`}>
        Редактировать
      </Link>
      </p>
    </div>
  );
}

export default Postitem;
