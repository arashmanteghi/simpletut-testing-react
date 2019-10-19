import React from 'react';

import Logo from './../../assets/logo.png';
import './styles.scss';

const Header = () => {
  return (
    <header>
      <div className="wrap" data-test="headerComponent">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;