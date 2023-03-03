import React, { useEffect } from 'react';

import SiksunbiAddRecent from '../component/SiksunbiAddRecent';
import Header from '../component/Header';
import SlideBox from '../component/SlideBox';

import '../style/SiksunbiAddRecent.css';
import '../style/SlideBox.css';

function Siksunbi({ infoData, userOwnedData, slidebox, setSlidebox }) {
  useEffect(() => {
    setSlidebox(false);
  }, [setSlidebox]);
  return (
    <>
      <Header setSlidebox={setSlidebox} />
      {slidebox && <SlideBox slidebox={slidebox} setSlidebox={setSlidebox} userOwnedData={userOwnedData} />}
      <SiksunbiAddRecent infoData={infoData} />
    </>
  );
}

export default Siksunbi;
