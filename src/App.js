import React, { useState } from 'react';

// 임시db
import infoData from './pseudo-db.json';
import menuData from './pseudo-db-menus.json';

// CSS reset
import { Reset } from 'styled-reset';

import './style/Header.css';
import './style/Footer.css';

// react-router-dom
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Siksunbi from './page/Siksunbi';
import Menu from './page/Menu';
import Footer from './component/Footer';
import Admin from './page/Admin';

function App() {
  // user owned data
  const [userOwnedData] = useState(infoData[0]);
  // slidebox 버튼
  const [slidebox, setSlidebox] = useState(false);

  return (
    <React.Fragment>
      <Reset />
      <Routes>
        <Route path='/' element={<Siksunbi infoData={infoData} userOwnedData={userOwnedData} slidebox={slidebox} setSlidebox={setSlidebox} />} />
        <Route path='/:id/admin' element={<Admin userOwnedData={userOwnedData} slidebox={slidebox} setSlidebox={setSlidebox} />} />
        <Route path='/:id' element={<Menu infoData={infoData} menuData={menuData} />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
