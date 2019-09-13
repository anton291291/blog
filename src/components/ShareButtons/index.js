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

const {match:{url}}=props;

  return (

    <span className='socialbtn-block'>
      <FacebookShareButton
        url={url}
      >
        <FacebookIcon
          size={34}
        />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
      >
        <TwitterIcon
          size={34}
        />
      </TwitterShareButton>

      <VKShareButton
        url={url}
      >
        <VKIcon
          size={34}
        />
      </VKShareButton>

      <TelegramShareButton
        url={url}
      >
        <TelegramIcon
          size={34}
        />
      </TelegramShareButton>

      <WhatsappShareButton
        url={url}
      >
        <WhatsappIcon
          size={34}
        />
      </WhatsappShareButton>

      <ViberShareButton
        url={url}
      >
        <ViberIcon
          size={34}
        />
      </ViberShareButton>

    </span>
  );
};

export default ShareButtons;
