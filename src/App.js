import React, { useState } from 'react';

// 임시db
import infoData from './pseudo-db.json';
import menuData from './pseudo-db-menus.json';

// react-router-dom
import { Routes, Route } from 'react-router-dom';

// CSS reset
import { Reset } from 'styled-reset';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Header.css';
import './style/Footer.css';
import './App.css';
import './style/TitleBox.css';

import Siksunbi from './page/Siksunbi';
import Menu from './page/Menu';
import Footer from './component/Footer';
import Admin from './page/Admin';

function App() {
  // user id
  const [loginId] = useState('jobuja8745');
  // user owned data
  const [userOwnedInfoData] = useState(infoData.find((v) => v.id === loginId));
  const [userOwnedMenuData] = useState(menuData.filter((v) => v.id === loginId));
  // slidebox 버튼
  const [slidebox, setSlidebox] = useState(false);

  return (
    <React.Fragment>
      <Reset />
      <Routes>
        <Route path='/' element={<Siksunbi infoData={infoData} userOwnedInfoData={userOwnedInfoData} slidebox={slidebox} setSlidebox={setSlidebox} />} />
        <Route path='/:id/admin' element={<Admin userOwnedInfoData={userOwnedInfoData} userOwnedMenuData={userOwnedMenuData} slidebox={slidebox} setSlidebox={setSlidebox} />} />
        <Route path='/:id' element={<Menu infoData={infoData} menuData={menuData} />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
