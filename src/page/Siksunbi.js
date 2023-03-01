import React from 'react';

import SiksunbiContents from './../component/SiksunbiContents';
import Header from './../component/Header';
import '../style/SiksunbiContents.css';

function Siksunbi({ infoData }) {
  return (
    <>
      <Header></Header>
      <SiksunbiContents infoData={infoData} />
    </>
  );
}

export default Siksunbi;
