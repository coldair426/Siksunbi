import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <img src='./icon/language.png' alt='translate-icon' />
      <div>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/'}>
          소개
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/best'}>
          대표메뉴
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/oneman'}>
          1인메뉴
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/couple'}>
          커플메뉴
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/familyset'}>
          가족메뉴
        </NavLink>
        <NavLink className='nav-item'>배달메뉴</NavLink>
        <NavLink className='nav-item'>음료&주류</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
