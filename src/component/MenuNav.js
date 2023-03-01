import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuNav({ dataSelect, menuSelect }) {
  let menuCategory = [];
  menuSelect.map((v) => menuCategory.push(v.category));
  menuCategory = new Set(menuCategory);
  menuCategory = Array.from(menuCategory);

  return (
    <nav className='nav'>
      <img src='/icon/language.png' alt='translate-icon' />
      <div>
        {menuCategory.map((v, i) => (
          <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')} to={`${i}`}>
            {v}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default MenuNav;
