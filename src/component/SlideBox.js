import React from 'react';

function SlideBox({ slidebox, setSlidebox }) {
  return (
    <div className='slide-box'>
      <div className='slide-box__header'>
        <img src='/icon/arrow-left-lined.png' alt='icon'></img>
        <div className='slide-box__title'>My</div>
        <img src='/icon/home.png' alt='icon'></img>
      </div>
    </div>
  );
}

export default SlideBox;
