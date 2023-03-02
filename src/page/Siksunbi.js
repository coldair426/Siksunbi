import React, { useState } from 'react';

import SiksunbiAddRecent from '../component/SiksunbiAddRecent';
import Header from '../component/Header';
import SlideBox from '../component/SlideBox';

import '../style/SiksunbiAddRecent.css';
import '../style/SlideBox.css';

function Siksunbi({ infoData }) {
  const [slidebox, setSlidebox] = useState(1);

  return (
    <>
      <Header></Header>
      <SlideBox slidebox={slidebox} setSlidebox={setSlidebox} />
      <SiksunbiAddRecent infoData={infoData} />
    </>
  );
}

export default Siksunbi;
