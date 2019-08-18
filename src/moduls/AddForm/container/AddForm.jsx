import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import AddFormActions from '../actions';
import {AddForm} from '../../../components/index';

const AddFormContainer = (props) => {

  const [text,setText] = useState("");

  const [title,setTitle] = useState("");

  const [imageUrl,setImageUrl] = useState("");

  const {fetchAddPost} = props;

  const date = {"title": title,"text": text,"imageUrl": imageUrl};

  return <AddForm
    text={text}
    title={title}
    imageUrl={imageUrl}
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
      fetchAddPost(date)
  }
  }/>
};

const mapStateToProps = ({forms}) => {
  return forms;
};

export default withRouter(
  connect(mapStateToProps, AddFormActions)(AddFormContainer)
)
