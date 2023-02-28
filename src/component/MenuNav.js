import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuNav() {
  return (
    <nav className='nav'>
      <img src='/icon/language.png' alt='translate-icon' />
      <div>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/래운이네만두/intro'}>
          소개
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/래운이네만두/1'}>
          대표메뉴
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/래운이네만두/2'}>
          1인메뉴
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/래운이네만두/3'}>
          커플메뉴
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={'/래운이네만두/4'}>
          가족메뉴
        </NavLink>
        <NavLink className='nav-item'>배달메뉴</NavLink>
        <NavLink className='nav-item'>음료&주류</NavLink>
      </div>
    </nav>
  );
}

export default MenuNav;
