import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import {AddForm} from '../../../components/index';
import PostListActions from '../../PostList/actions';
import {PostApi} from '../../../utils/api';

const PostEditorContainer = (props) => {

  const {fetchPosts,_id,text,title,imageUrl,history} = props;
  console.log(props);
  useEffect(() => {
    fetchPosts();
  });

  fetchPosts()

  const [textNode,setText] = useState(text);
  const [titleNode,setTitle] = useState(title);
  const [imageUrlNode,setImageUrl] = useState(imageUrl);

  const updateData = {
    imageUrl: imageUrlNode,
    title: titleNode,
    text: textNode,
  };

  return <AddForm
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
};


const mapStateToProps = ({posts},{match: {params:{id}}}) => {
  return posts.posts.filter(item => item._id === id)[0]
  console.log(posts);
};

export default withRouter(
  connect(mapStateToProps,PostListActions)(PostEditorContainer)
)
