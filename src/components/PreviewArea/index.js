import React from 'react';
import marked from 'marked';

import './PreviewArea.scss';

marked.setOptions({
  breaks: false
});
const renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
  return `<a target='_blank' href='${href}'>'${text}` + '</a>';
}
renderer.code = (code, language) => {
  return '<pre><code class=language-' + language + '>' + code + '</code></pre>';
}

const PreviewArea = ({text}) => {
  return (
    <div
      className='preview'
      dangerouslySetInnerHTML={{__html: text === undefined ? null : marked(text, { renderer: renderer })}}>
    </div>
  )
}

export default PreviewArea;
