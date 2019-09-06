import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import {PostApi} from '../../../utils/api';

import PostListActions from '../../PostList/actions';
import UserLoginActions from '../../UserLogin/actions';

import {AddForm} from '../../../components/index';
import {HeaderBlock} from '../../index';

import {HollowDotsSpinner} from 'react-epic-spinners';


const AddFormContainer = (props) => {

  const {fetchPosts, history,isAuthenticated,isLoading} = props;

  useEffect(() => {
    !isAuthenticated ?  history.push('/posts') : console.log('ok');
  },[isAuthenticated]);

  useEffect(() => {
    if (sessionStorage.getItem('search').length > 0 ) {
      history.push('/posts')
    }
  },[sessionStorage.getItem('search')]);

  useEffect(() => {
    fetchPosts()
  },[]);

  const [text,setText] = useState('');
  const [title,setTitle] = useState('');
  const [imageUrl,setImageUrl] = useState('');

  const date = {'title': title,'text': text,'imageUrl': imageUrl};

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
        onSubmit={ () => {
          PostApi.post(date)
          .then((res) => console.log(res));
          PostApi.get()
          .then(({data}) => {
            setTimeout(() => {
              history.push(`/posts/${data[data.length -1]._id}`)}, 1000)
          })
        }
        }/>
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

const mapStateToProps = ({posts,auth}) => {
  return {...auth, ...posts}
};

const mapDispatchToProps = {
  ...PostListActions,
  ...UserLoginActions
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddFormContainer)
)
