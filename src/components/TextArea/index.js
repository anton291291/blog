import React from 'react';

import './TextArea.scss';

const TextArea = (props) => {

  const {text, onChangeText} = props;

  return (
    <>
      <textarea
        id='outlined-textarea'
        rows='12'
        value={text}
        onChange={onChangeText}
        className='form-block__textfield'
      />
    </>
  );
};

export default TextArea;
