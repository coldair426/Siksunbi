import React from 'react';

import '../style/NoticeBox.css';

function NoticeBox() {
  return (
    <div className='notice'>
      <div className='notice__box'>
        <div className='notice__content'>
          업체의 전자메뉴판을 수정하시려면
          <br />
          <span className='notice__content--impact'>오른쪽 상단 메뉴 → 설정</span>에 접속해 주세요.
        </div>
      </div>
      <div className='notice__box'>
        <div className='notice__content'>
          <span className='notice__content--impact'>오른쪽 상단 메뉴 → QR코드</span> 를 확인해 보세요.
          <br />
          업체의 <span className='notice__content--impact'>전자메뉴판에 바로 접속</span>할 수 있습니다.
          <br />
          프린트해서 테이블 등 잘 보이는 곳에 붙여보세요.
        </div>
      </div>
    </div>
  );
}

export default NoticeBox;
