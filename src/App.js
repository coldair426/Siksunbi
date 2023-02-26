import React from 'react';
// CSS reset
import { Reset } from 'styled-reset';
// react-router-dom
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import './style/Header.css';
import './style/Footer.css';
import './style/Nav.css';
import './style/Introduction.css';
import './style/Menu.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Introduction from './component/Introduction';
import Menu from './component/Menu';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path='/best' element={<Menu />} />
        <Route path='/oneman' element={<div></div>} />
        <Route path='/couple' element={<div></div>} />
        <Route path='/familyset' element={<div></div>} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
