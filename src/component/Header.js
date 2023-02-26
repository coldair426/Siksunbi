import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='header'>
        <img className='header__logo' src='./logo/logo-full.png' alt='siksunbi-logo' />
        <NavLink to={'/'}>
          <span className='header__name'>만두가게</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
