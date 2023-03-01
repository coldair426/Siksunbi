import React from 'react';
import { Link } from 'react-router-dom';

function MenuHeader({ info, setActive }) {
  return (
    <header>
      <div className='header'>
        <Link to={'/'}>
          <img className='header__logo' src='/logo/logo-full.png' alt='siksunbi-logo' />
        </Link>
        <span
          className='header__name'
          onClick={() => {
            setActive(0);
          }}>
          @{info.title}
        </span>
      </div>
    </header>
  );
}

export default MenuHeader;
