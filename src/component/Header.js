import React from 'react';
import { Link } from 'react-router-dom';

function Header({ setSlidebox }) {
  return (
    <header className='ssbHeader'>
      <Link to={'/'}>
        <img src='/logo/logo-ssb.png' className='ssbHeader__logo' alt='logo' />
      </Link>
      <button onClick={() => setSlidebox(true)} className='ssbHeader__button'>
        <img src='/icon/menu-dot.png' className='ssbHeader__dotIcon' alt='menu icon' />
      </button>
    </header>
  );
}

export default Header;
