import React from 'react';

import  './ToolsBar.scss';

const ToolsBar = ({onClickToolsBar}) => {

  return (
    <div className="toolsbar-block">
      <div className="spacer-block">
        <i title="Bold" onClick={onClickToolsBar} className="fa fa-bold"/>
        <i title="Italic" onClick={onClickToolsBar} className="fa fa-italic"/>
      </div>
      <div className="spacer-block">
        <i title="Block Quote" onClick={onClickToolsBar} className="fa fa-quote-left"/>
        <i title="Link" onClick={onClickToolsBar} className="fa fa-link"/>
        <i title="Inline Code" onClick={onClickToolsBar} className="fa fa-code"/>
        <i title="Image" onClick={onClickToolsBar} className="fa fa-picture-o"/>
      </div>
      <div className="spacer-block">
        <i title="Bulleted List" onClick={onClickToolsBar} className="fa fa-list"/>
        <i title="Numbered List" onClick={onClickToolsBar} className="fa fa-list-ol"/>
      </div>
    </div>
  )
};

export default ToolsBar;
