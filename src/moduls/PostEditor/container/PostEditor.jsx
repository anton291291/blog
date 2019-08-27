import React, {useEffect,useState, useReducer} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import {AddForm, HeaderBlock} from '../../../components/index';
import PostListActions from '../../PostList/actions';
import {PostApi} from '../../../utils/api';

const PostEditorContainer = (props) => {

  const {fetchPosts,_id,text,title,imageUrl,history} = props;

  console.log(props);

  const [textNode,setText] = useState(text);
  const [titleNode,setTitle] = useState(title);
  const [imageUrlNode,setImageUrl] = useState(imageUrl);

  useEffect(() => {
    fetchPosts();
  },[]);

  const updateData = {
    imageUrl: imageUrlNode,
    title: titleNode,
    text: textNode,
  };

  return (
    <>
      <HeaderBlock/>
      <AddForm
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
        PostApi.put(_id,updateData)
        setTimeout(() => {
          history.push(`/posts/${_id}`)
        }, 2000)
      }}
           />
    </>
  )
};


const mapStateToProps = ({posts},{match: {params:{id}}}) => {
  return posts.posts.filter(item => item._id === id)[0]
  console.log(posts);
};

export default withRouter(
  connect(mapStateToProps,PostListActions)(PostEditorContainer)
)
