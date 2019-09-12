import React from 'react';

import './Footer.scss';

const Footer = () => {

  return (
    <div className='footer'>
    <p class="heart">
      Сделано с  <i class="fa fa-heart fa-2x animated pulse"></i>
    </p>
    <p class="footer__copyright">
      © 2019 Антон Соколов
  	</p>
  </div>
  );
};

export default Footer;
