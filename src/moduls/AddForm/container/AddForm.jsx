import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import {PostApi} from '../../../utils/api';

import PostListActions from '../../PostList/actions';

import {AddForm} from '../../../components/index';

const AddFormContainer = (props) => {

  const {fetchPosts, history} = props;

  useEffect(() => {fetchPosts()},[]);

  const [text,setText] = useState("");

  const [title,setTitle] = useState("");

  const [imageUrl,setImageUrl] = useState("");

  const date = {"title": title,"text": text,"imageUrl": imageUrl};

  return <AddForm
    title={title}
    imageUrl={imageUrl}
    text={text}
    onChangeImage={e =>
      setImageUrl(e.target.value)
    }
    onChangeText={e =>
      setText(e.target.value)
    }
    onChangeTitle={e =>
      setTitle(e.target.value)
    }
    onSubmit={ () => {
      PostApi.post(date)
      .then((res) => console.log(res));
      PostApi.get()
      .then(({data}) => {
        setTimeout(() => {history.push(`/posts/${data[data.length -1]._id}`)}, 1000)
      })
    }
    }/>
};

export default withRouter(
  connect(null, PostListActions)(AddFormContainer)
)
