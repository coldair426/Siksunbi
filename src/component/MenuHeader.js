import React from 'react';
import { Link } from 'react-router-dom';

function MenuHeader({ dataSelect }) {
  return (
    <header>
      <div className='header'>
        <Link to={'/'}>
          <img className='header__logo' src='/logo/logo-full.png' alt='siksunbi-logo' />
        </Link>
        <Link to={'intro'}>
          <span className='header__name'>{dataSelect.title}</span>
        </Link>
      </div>
    </header>
  );
}

export default MenuHeader;
