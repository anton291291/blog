import React from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  VKShareButton,
  ViberShareButton,
  InstapaperShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  VKIcon,
  ViberIcon,
  InstapaperIcon,
} from 'react-share';

import './ShareButtons.scss'

const ShareButtons = (props) => {

  return (

    <span className='socialbtn-block'>
      <FacebookShareButton
        url={window.location.href}
      >
        <FacebookIcon
          size={34}
        />
      </FacebookShareButton>

      <TwitterShareButton
        url={window.location.href}
      >
        <TwitterIcon
          size={34}
        />
      </TwitterShareButton>

      <VKShareButton
        url={window.location.href}
        text="Привет"
      >
        <VKIcon
          size={34}
        />
      </VKShareButton>

      <TelegramShareButton
        url={window.location.href}
      >
        <TelegramIcon
          size={34}
        />
      </TelegramShareButton>

      <WhatsappShareButton
        url={window.location.href}
      >
        <WhatsappIcon
          size={34}
        />
      </WhatsappShareButton>

    </span>
  );
};

export default ShareButtons;
