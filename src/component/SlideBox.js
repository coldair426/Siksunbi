import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SlideBox({ slidebox, setSlidebox, userInfo }) {
  // slideBox active 부모요소 스크롤 정지
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [slidebox]);

  return (
    <>
      <div
        className='mask'
        onClick={() => {
          setSlidebox(false);
        }}
      />
      <div className='slide-box__wrap'>
        <div className='slide-box'>
          <div className='slide-box__header'>My</div>
          <div className='slide-box__main'>
            <div>{userInfo.id}</div>
            <Link to={`/${userInfo.id}`}>
              <div>내 가게 메뉴 보기</div>
            </Link>
            <Link to={`/${userInfo.id}/admin`}>
              <div>관리자 페이지</div>
            </Link>
          </div>
        </div>
        <button
          className='slide-box__close'
          onClick={() => {
            setSlidebox(false);
          }}>
          <img src='/icon/close.png' alt='close' />
        </button>
      </div>
    </>
  );
}

export default SlideBox;
