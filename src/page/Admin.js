import React, { useEffect } from 'react';
import Header from './../component/Header';
import SlideBox from './../component/SlideBox';

function Admin({ userOwnedData, slidebox, setSlidebox }) {
  useEffect(() => {
    setSlidebox(false);
  }, [setSlidebox]);
  return (
    <>
      <Header setSlidebox={setSlidebox} />
      {slidebox && <SlideBox slidebox={slidebox} setSlidebox={setSlidebox} userOwnedData={userOwnedData} />}
    </>
  );
}

export default Admin;
