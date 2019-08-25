import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import "./HeaderBlock.scss";

const HeaderBlock = ({title, imageUrl}) => {
  return (
    <ScrollAnimation
      animateIn='fadeIn'
      duration={3}
      animateOnce={true}
    >
    <div className="header-block" style={{backgroundImage: `url(${imageUrl})`}}>
      <div className="container">
        <div className="header-block__overlay"></div>
        <div className="header-block__center">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  );
}

HeaderBlock.defaultProps = {
  title: 'Мои путешествия',
  imageUrl: 'https://images.unsplash.com/photo-1562592199-8aed6ae5252d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80'
};

export default HeaderBlock;
