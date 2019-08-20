import React, {useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';


import PostListActions from '../../PostList/actions';

import {AddForm} from '../../../components/index';

const AddFormContainer = (props) => {

  const [text,setText] = useState("");

  const [title,setTitle] = useState("");

  const [imageUrl,setImageUrl] = useState("");

  const {fetchAddPost, fetchPosts,fetchPost, history, id} = props;

  const date = {"title": title,"text": text,"imageUrl": imageUrl};
console.log(props);

  return <AddForm
    _id={id}
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
      fetchAddPost(date);
      setTimeout(()=> {console.log(props)},3000)
      setTimeout(() => {history.push(`/posts/${props._id}`)}, 5000)
    }
    }/>
};

const mapStateToProps = ({posts},ownProps) => {
  console.log(posts)
   return posts.forms ?  posts.posts.filter(item => item.text === posts.forms.text)[0] :
  posts
};

export default withRouter(
  connect(mapStateToProps, PostListActions)(AddFormContainer)
)
