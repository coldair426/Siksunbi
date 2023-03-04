import React, { useEffect } from 'react';

import SiksunbiAddRecent from '../component/SiksunbiAddRecent';
import Header from '../component/Header';
import SlideBox from '../component/SlideBox';
import TitleBox from './../component/TitleBox';
import NoticeBox from './../component/NoticeBox';

import '../style/SiksunbiAddRecent.css';
import '../style/SlideBox.css';

function Siksunbi({ infoData, userOwnedInfoData, slidebox, setSlidebox }) {
  useEffect(() => {
    setSlidebox(false);
  }, [setSlidebox]);
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
