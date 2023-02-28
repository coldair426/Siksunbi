import React, { useState } from 'react';

// 임시db
import pseudoDb from './pseudo-db.json';

// CSS reset
import { Reset } from 'styled-reset';
// react-router-dom
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Menu CSS
import './style/MenuIntroduction.css';
import './style/MenuContents.css';

import Menu from './page/Menu';
// Menu JS
import MenuIntroduction from './component/MenuIntroduction';
import MenuContents from './component/MenuContents';

function App() {
  const [pseudoData] = useState(JSON.parse(pseudoDb));

  return (
    <React.Fragment>
      <Reset />
      <Routes>
        <Route path='/' element={<>식선비홍보페이지</>} />
        <Route path='/deraeun/admin' element={<div>관리자페이지</div>} />
        <Route path='/deraeun' element={<Menu />}>
          <Route path='intro' element={<MenuIntroduction />} />
          <Route path='1' element={<MenuContents />} />
        </Route>
        <Route path='*' element={<>없는페이지에요.</>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
