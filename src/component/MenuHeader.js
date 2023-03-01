import React from 'react';
import { Link } from 'react-router-dom';

function MenuHeader() {
  return (
    <header>
      <div className='header'>
        <Link to={'/'}>
          <img className='header__logo' src='/logo/logo-full.png' alt='siksunbi-logo' />
        </Link>
        <Link to={'/래운이네만두/intro'}>
          <span className='header__name'>@ 만두가게</span>
        </Link>
      </div>
    </header>
  );
}

export default MenuHeader;
