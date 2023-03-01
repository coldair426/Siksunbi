import React, { useState } from 'react';

import '../style/MenuIntroduction.css';
import '../style/MenuHeader.css';
import '../style/MenuFooter.css';
import '../style/MenuNav.css';

import MenuHeader from '../component/MenuHeader';
import MenuFooter from '../component/MenuFooter';
import MenuNav from '../component/MenuNav';
import MenuIntroduction from '../component/MenuIntroduction';

// react-router-dom
import { Link, useParams } from 'react-router-dom';

function Menu({ data, menu }) {
  const { id } = useParams();
  const [dataSelect] = useState(data.find((v) => v.id === id) || false);
  const [menuSelect] = useState(menu.filter((v) => v.id === id) || false);

  return (
    <div>
      {dataSelect ? (
        <>
          <MenuHeader dataSelect={dataSelect} />
          <MenuNav dataSelect={dataSelect} menuSelect={menuSelect} />
          <MenuIntroduction dataSelect={dataSelect} />
          <MenuFooter />
        </>
      ) : (
        <Link to={'/'}>홈으로 이동하기</Link>
      )}
    </div>
  );
}

export default Menu;
