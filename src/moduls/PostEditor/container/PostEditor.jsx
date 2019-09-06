import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import {AddForm} from '../../../components/index';
import {HeaderBlock} from '../../index';
import PostListActions from '../../PostList/actions';
import UserLoginActions from '../../UserLogin/actions';
import {PostApi} from '../../../utils/api';

import {HollowDotsSpinner} from 'react-epic-spinners';

const PostEditorContainer = (props) => {

  const {fetchPosts,_id,text,title,imageUrl,
    history, isLoading, isAuthenticated} = props;

  useEffect(() => {
    !isAuthenticated ?  history.push('/posts') : console.log('ok');
  },[isAuthenticated]);

  useEffect(() => {
      if (sessionStorage.getItem('search').length > 0 ) {
        history.push('/posts')
      }
  },[sessionStorage.getItem('search')]);

  const [textNode,setText] = useState(text);
  const [titleNode,setTitle] = useState(title);
  const [imageUrlNode,setImageUrl] = useState(imageUrl);

  useEffect(() => {
    fetchPosts();
  },[]);

  useEffect(() => {
    setText(text
    )
  },[text])

  useEffect(() => {
    setTitle(title)
  },[title])

  useEffect(() => {
    setImageUrl(imageUrl)
  },[imageUrl])

  const updateData = {
    imageUrl: imageUrlNode,
    title: titleNode,
    text: textNode,
  };

  return (

    !isLoading
    ?
    <>
      <HeaderBlock {...props}/>
      <AddForm
        {...props}
        title={titleNode}
        imageUrl={imageUrlNode}
        text={textNode}
        onChangeImage={e =>
          setImageUrl(e.target.value)
        }
        onChangeText={e =>
          setText(e.target.value)
        }
        onChangeTitle={e =>
          setTitle(e.target.value)
        }
        onSubmit={() => {
          console.log(updateData);
          PostApi.put(_id,updateData)
          setTimeout(() => {
            history.push(`/posts/${_id}`)
          }, 1000)
        }}
      />
   </>
   :
   <HollowDotsSpinner
     color='#f50057'
     size='30'
     animationDuration='1000'
     className="preloader"
   />
  )
};

const mapStateToProps = ({posts,auth},{match: {params:{id}}}) => {
  return {...posts.posts.filter(item => item._id === id)[0],
    ...auth, ...posts}
};

const mapDispatchToProps = {
  ...PostListActions,
  ...UserLoginActions
};

export default withRouter(
  connect(mapStateToProps,mapDispatchToProps)(PostEditorContainer)
)
