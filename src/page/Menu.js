import React from 'react';

import '../style/MenuHeader.css';
import '../style/MenuFooter.css';
import '../style/MenuNav.css';

import MenuHeader from '../component/MenuHeader';
import MenuFooter from '../component/MenuFooter';
import MenuNav from '../component/MenuNav';

// react-router-dom
import { Outlet } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <MenuHeader />
      <MenuNav />
      <Outlet />
      <MenuFooter />
    </div>
  );
}

export default Menu;
