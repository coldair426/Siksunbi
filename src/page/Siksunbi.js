import React from 'react';

import SiksunbiAddRecent from '../component/SiksunbiAddRecent';
import Header from './../component/Header';
import '../style/SiksunbiAddRecent.css';

function Siksunbi({ infoData }) {
  return (
    <>
      <Header></Header>
      <SiksunbiAddRecent infoData={infoData} />
    </>
  );
}

export default Siksunbi;
