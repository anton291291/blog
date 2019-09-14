import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import {AddForm} from '../../../components/index';
import {HeaderBlock} from '../../index';
import PostListActions from '../../PostList/actions';
import UserAuthActions from '../../UserLogin/actions';
import {PostApi} from '../../../utils/api';

import {HollowDotsSpinner} from 'react-epic-spinners';


const PostEditorContainer = (props) => {

  const {fetchPosts,_id,text,title,imageUrl,
  history, isLoading, isAuthenticated} = props;

  useEffect(() => {
    !isAuthenticated ?  history.push('/posts') : console.log('ok');
  },[isAuthenticated]);

  useEffect(() => {
    fetchPosts();
  },[]);

  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  useEffect(() => {
    if (sessionStorage.getItem('search').length > 0 ) {
      history.push('/posts')
    }
  },[sessionStorage.getItem('search')]);

  const [textNode,setText] = useState(text);
  const [titleNode,setTitle] = useState(title);
  const [imageUrlNode,setImageUrl] = useState(imageUrl);

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
        onSubmit={async () => {
          await PostApi.put(_id,updateData);
          history.push(`/posts/${_id}`);
        }}
      />
   </>
   :
   <HollowDotsSpinner
     color='#f50057'
     size='30'
     animationDuration='1000'
     className='preloader'
   />
  )
};

const mapStateToProps = ({posts,auth},{match: {params:{id}}}) => {
  return {...posts.posts.filter(item => item._id === id)[0],
    ...auth, ...posts}
};

const mapDispatchToProps = {
  ...PostListActions,
  ...UserAuthActions
};

export default withRouter(
  connect(mapStateToProps,mapDispatchToProps)(PostEditorContainer)
)
