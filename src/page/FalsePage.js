import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function FalsePage() {
  return (
    <div className='FalsePage'>
      <div>
        <div>404</div>
        <div>
          요청하신 페이지는 존재하지 않거나,
          <br />
          사용할 수 없는 페이지입니다.
        </div>
        <div>
          입력하신 페이지 주소가 정확한지
          <br />
          다시 한번 확인해보시기 바랍니다.
        </div>{' '}
        <Link to={'/'}>
          <Button variant='primary' size='sm' className='FalsePage__goHome'>
            식선비 홈 가기
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FalsePage;
