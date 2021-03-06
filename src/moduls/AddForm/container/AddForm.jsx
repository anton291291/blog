import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import {PostApi} from '../../../utils/api';

import PostListActions from '../../PostList/actions';
import UserAuthActions from '../../UserLogin/actions';

import {AddForm} from '../../../components/index';
import {HeaderBlock} from '../../index';

import {HollowDotsSpinner} from 'react-epic-spinners';


const AddFormContainer = (props) => {

  const {fetchPosts, history,isAuthenticated,isLoading} = props;

  useEffect(() => {
    !isAuthenticated ?  history.push('/posts') : console.log('ok');
  },[isAuthenticated]);

  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  useEffect(() => {
    if (sessionStorage.getItem('search') && sessionStorage.getItem('search').length > 0 ) {
      history.push('/posts')
    }
  },[sessionStorage.getItem('search')]);

  const [text,setText] = useState('');
  const [title,setTitle] = useState('');
  const [imageUrl,setImageUrl] = useState('');

  const date = {'title': title,'text': text,'imageUrl': imageUrl};

  const fetchCreatePost = async (date) => {
    await  PostApi.post(date);
    PostApi.get()
    .then(({data}) => {
      history.push(`/posts/${data[data.length -1]._id}`)
    });
  };

  return (
    !isLoading
    ?
    <>
      <HeaderBlock {...props}/>
      <AddForm
        {...props}
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
        onSubmit={() => {
          fetchCreatePost(date,history)
        }}/>
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

const mapStateToProps = ({posts,auth}) => {
  return {...auth, ...posts}
};

const mapDispatchToProps = {
  ...PostListActions,
  ...UserAuthActions
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddFormContainer)
)
