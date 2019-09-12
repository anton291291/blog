import React from 'react';

import {TextArea, ToolsBar, PreviewArea} from '../../../components';


const buttonTypes = {
  'fa fa-bold': '**',
  'fa fa-italic': '_',
  'fa fa-quote-left': '> ',
  'fa fa-link': '[Link]',
  'fa fa-picture-o': '![Alt Text]',
  'fa fa-list-ol': '1. ',
  'fa fa-list': '- ',
  'fa fa-code': '`'
};
const buttonStyles = {
  'fa fa-bold': 'Жирный текст',
  'fa fa-italic': 'Курсив',
  'fa fa-quote-left': 'Цитата',
  'fa fa-link': '(http://)',
  'fa fa-picture-o': '(http://)',
  'fa fa-list-ol': 'Нумерованный список',
  'fa fa-list': 'Маркерованный список',
  'fa fa-code': 'Встроенный код'
};

const MarkDownPreviewerContainer = (props) => {

  const handleClick = (e) => {

    let el= document.getElementById('outlined-textarea');
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const text = el.value;
    const before = text.substring(0, start);
    const after  = text.substring(end, text.length);
    let newText;

    switch (e.target.className) {
      case 'fa fa-bold':
      case 'fa fa-italic':
      case 'fa fa-code':
        newText= buttonStyles[e.target.className]
        el.value = (before + buttonTypes[e.target.className] + newText + buttonTypes[e.target.className] + after)
        el.selectionStart =  start + buttonTypes[e.target.className].length
        el.selectionEnd = el.selectionStart + newText.length
      break;

      case 'fa fa-quote-left':
      case 'fa fa-list-ol':
      case 'fa fa-list':
        newText= buttonStyles[e.target.className];
        el.value = (before + buttonTypes[e.target.className] + newText + after)
        el.selectionStart =  start + buttonTypes[e.target.className].length
        el.selectionEnd = el.selectionStart + newText.length
      break;

      case 'fa fa-link':
      case 'fa fa-picture-o':
        newText= buttonStyles[e.target.className];
        el.value = (before + buttonTypes[e.target.className] + newText + after)
        el.selectionStart =  start + 1 + buttonTypes[e.target.className].length
        el.selectionEnd = el.selectionStart - 2 + newText.length
      break;
      default:
    }
    el.focus()
  };

  return (
    <>
      <ToolsBar
        {...props}
        onClickToolsBar={handleClick}
      />
      <TextArea
        {...props}
      />
      <PreviewArea
        {...props}
      />
    </>
  );
};

export default MarkDownPreviewerContainer;
