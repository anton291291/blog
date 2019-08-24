import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import {PostApi} from '../../../utils/api';

import {AddForm} from '../../../components/index';

import PostListActions from '../../PostList/actions';



const AddFormContainer = (props) => {

<<<<<<< HEAD
=======
  const {fetchPosts, history} = props;

  useEffect(() => {fetchPosts()},[]);

  const [text,setText] = useState("");
>>>>>>> PostEditor

  const {fetchAddPost,fetchPosts, history, id} = props;


<<<<<<< HEAD

  const {handleChangeText, handleChangeTitle, handleChangeImageUrl, text,title, imageUrl,posts}= props;

    const date = {"title": title,"text": text,"imageUrl": imageUrl};

    useEffect(() => {
      fetchPosts()
    },[])
console.log(props);
=======
  const date = {"title": title,"text": text,"imageUrl": imageUrl};
>>>>>>> PostEditor

  return <AddForm
    title={title}
    postId={id}
    imageUrl={imageUrl}
    text={text}
    onChangeImage={e =>
      handleChangeImageUrl(e.target.value)
    }
    onChangeText={e =>
      handleChangeText(e.target.value)
    }
    onChangeTitle={e =>
      handleChangeTitle(e.target.value)
    }
<<<<<<< HEAD
    onSubmit={ (e) => {
      fetchAddPost(date);
      setTimeout(() => {console.log(props);}, 5000)

=======
    onSubmit={ () => {
      PostApi.post(date)
      .then((res) => console.log(res));
      PostApi.get()
      .then(({data}) => {
        setTimeout(() => {history.push(`/posts/${data[data.length -1]._id}`)}, 1000)
      })
>>>>>>> PostEditor
    }
    }/>
};

<<<<<<< HEAD
const mapStateToProps = ({posts}) => {
  console.log(posts)
   return  {...posts}

};

=======
>>>>>>> PostEditor
export default withRouter(
  connect(null, PostListActions)(AddFormContainer)
)
