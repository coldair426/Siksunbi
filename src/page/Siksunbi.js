import React, { useEffect } from 'react';

import SiksunbiAddRecent from '../component/SiksunbiAddRecent';
import Header from '../component/Header';
import SlideBox from '../component/SlideBox';
import TitleBox from './../component/TitleBox';
import NoticeBox from './../component/NoticeBox';

import '../style/SiksunbiAddRecent.css';
import '../style/SlideBox.css';

function Siksunbi({ infoData, userOwnedInfoData, slidebox, setSlidebox }) {
  // slidebox 자동 닫기
  useEffect(() => {
    setSlidebox(false);
  }, [setSlidebox]);
  // 라우터 변경 되었을 때 스크롤 맨위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header setSlidebox={setSlidebox} />
      {slidebox && <SlideBox slidebox={slidebox} setSlidebox={setSlidebox} userOwnedInfoData={userOwnedInfoData} />}
      <TitleBox title='Notice' />
      <NoticeBox />
      <TitleBox title='최근에 추가했어요' />
      <SiksunbiAddRecent infoData={infoData} />
    </>
  );
}

export default Siksunbi;
