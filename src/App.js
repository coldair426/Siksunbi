import React, { useState } from 'react';

// 임시db
import adminData from './pseudo-db.json';
import adminMenu from './pseudo-db-menus.json';

// CSS reset
import { Reset } from 'styled-reset';
// react-router-dom
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Menu CSS
import './style/MenuContents.css';

import Menu from './page/Menu';
// Menu JS
import MenuContents from './component/MenuContents';

function App() {
  const [data] = useState(adminData);
  const [menu] = useState(adminMenu);

  return (
    <React.Fragment>
      <Reset />
      <Routes>
        <Route path='/' element={<>식선비홍보페이지</>} />
        <Route path='/:id' element={<Menu data={data} menu={menu} />} />
        <Route path='/:id/menu' element={<MenuContents />} />
        <Route path='/:id/admin' element={<div>관리자페이지</div>} />
        <Route path='*' element={<>존재하지 않는 페이지</>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
