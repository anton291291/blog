import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';


import {AddForm} from '../../../components/index';

import PostListActions from '../../PostList/actions';



const AddFormContainer = (props) => {


  const {fetchAddPost,fetchPosts, history, id} = props;



  const {handleChangeText, handleChangeTitle, handleChangeImageUrl, text,title, imageUrl,posts}= props;

    const date = {"title": title,"text": text,"imageUrl": imageUrl};

    useEffect(() => {
      fetchPosts()
    },[])
console.log(props);

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
    onSubmit={ (e) => {
      fetchAddPost(date);
      setTimeout(() => {console.log(props);}, 5000)

    }
    }/>
};

const mapStateToProps = ({posts}) => {
  console.log(posts)
   return  {...posts}

};

export default withRouter(
  connect(mapStateToProps, PostListActions)(AddFormContainer)
)
