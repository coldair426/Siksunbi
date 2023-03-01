import React from 'react';

// 임시db
import infoData from './pseudo-db.json';
import menuData from './pseudo-db-menus.json';

// CSS reset
import { Reset } from 'styled-reset';

// react-router-dom
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Menu from './page/Menu';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Routes>
        <Route path='/' element={<>식선비홍보페이지</>} />
        <Route path='/deraeun/admin' element={<div>관리자페이지</div>} />
        <Route path='/:id' element={<Menu infoData={infoData} menuData={menuData} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
