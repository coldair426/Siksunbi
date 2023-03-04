import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function SlideBox({ slidebox, setSlidebox, userOwnedData }) {
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
        // mask 클릭시 close
        onClick={() => {
          setSlidebox(false);
        }}
      />
      <div className='slide-box__wrap'>
        <div className='slide-box'>
          <div className='slide-box__header'>My</div>
          <div className='slide-box__main'>
            <div className='slide-box__main--row'>
              <NavLink className={({ isActive }) => (isActive ? 'slide-box-active' : undefined)} to={'/'}>
                <img src='/icon/home.png' alt='home' />
                <div>HOME</div>
              </NavLink>
              <Link to={`/${userOwnedData.id}`}>
                <img src='/icon/menu.png' alt='menu' />
                <div>메뉴판</div>
              </Link>
            </div>
            <div className='slide-box__main--row'>
              {/* QR코드 생성기 google api */}
              <a href={'https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://ssb.dothome.co.kr/' + userOwnedData.id} target='_blank' rel='noreferrer' title='QR-Code'>
                <img src='/icon/qrcode.png' alt='qr-code' />
                <div>QR코드</div>
              </a>
              <NavLink className={({ isActive }) => (isActive ? 'slide-box-active' : undefined)} to={`/${userOwnedData.id}/admin`}>
                <img src='/icon/admin.png' alt='admin' />
                <div>설정</div>
              </NavLink>
            </div>
            <div className='slide-box__main--login'>
              {/* <img src='/logo/logo-sq-w.png' alt='logo' /> */}
              <div>{userOwnedData.id}</div>
              <button>로그아웃</button>
            </div>
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
