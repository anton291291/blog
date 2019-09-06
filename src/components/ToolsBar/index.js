import React from 'react';

import  './ToolsBar.scss';

const ToolsBar = (props) => {

  return (
    <div className="toolbar">
      <div className="spacer">
        <i title="Bold" onClick={props.onClick} className="fa fa-bold"/>
        <i title="Italic" onClick={props.onClick} className="fa fa-italic"/>
      </div>
      <div className="spacer">
        <i title="Block Quote" onClick={props.onClick} className="fa fa-quote-left"/>
        <i title="Link" onClick={props.onClick} className="fa fa-link"/>
        <i title="Inline Code" onClick={props.onClick} className="fa fa-code"/>
        <i title="Image" onClick={props.onClick} className="fa fa-picture-o"/>
      </div>
      <div className="spacer">
        <i title="Bulleted List" onClick={props.onClick} className="fa fa-list"/>
        <i title="Numbered List" onClick={props.onClick} className="fa fa-list-ol"/>
      </div>
    </div>
  )
};

export default ToolsBar;
