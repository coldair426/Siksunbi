import React, { useState, useEffect } from 'react';

import '../style/MenuHeader.css';
import '../style/MenuNav.css';
import '../style/MenuIntroduction.css';
import '../style/MenuContents.css';
import '../style/FalsePage.css';

import MenuHeader from '../component/MenuHeader';
import MenuNav from '../component/MenuNav';
import MenuIntroduction from './../component/MenuIntroduction';
import MenuContents from '../component/MenuContents';
import FalsePage from './FalsePage';

import { useParams } from 'react-router-dom';

function Menu({ infoData, menuData }) {
  const { id } = useParams(); // URL 파라미터
  // id(URL파라미터)로 데이터 픽
  const [info] = useState(infoData.find((v) => v.id === id));
  const [menu] = useState(menuData.filter((v) => v.id === id));
  // db categry 배열
  let category = [];
  menu.map((v) => category.push(v.category));
  // db category 중복제거
  category = new Set(category);
  category = Array.from(category);
  // category 선택 변수
  const [active, setActive] = useState(0);
  // category가 변경 되었을 때 스크롤 맨위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  return (
    <div>
      {/* db에 존재하는 id 일때 */}
      {!!infoData.find((v) => v.id === id) ? (
        <>
          <MenuHeader info={info} setActive={setActive} />
          <MenuNav category={category} active={active} setActive={setActive} />
          {active === 0 && <MenuIntroduction info={info} />}
          {category.map((cate, i) => {
            const menuByCategory = menu.filter((v) => v.category === cate);
            return active === i + 1 && <MenuContents key={`${cate}${i}`} menuByCategory={menuByCategory} />;
          })}
        </>
      ) : (
        <FalsePage />
      )}
    </div>
  );
}

export default Menu;
