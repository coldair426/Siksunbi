import React, { useEffect } from 'react';
import Header from './../component/Header';
import SlideBox from './../component/SlideBox';
import TitleBox from './../component/TitleBox';

// bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../style/Admin.css';

function Admin({ userOwnedInfoData, userOwnedMenuData, slidebox, setSlidebox }) {
  // category list 중복제거
  let category = [];
  userOwnedMenuData.map((v) => category.push(v.category));
  category = [...new Set(category)];
  // sildebox 자동 닫기
  useEffect(() => {
    setSlidebox(false);
  }, [setSlidebox]);

  return (
    <>
      <Header setSlidebox={setSlidebox} />
      {slidebox && <SlideBox slidebox={slidebox} setSlidebox={setSlidebox} userOwnedInfoData={userOwnedInfoData} />}
      <TitleBox title='내 정보' />
      <div className='admin__user-info'>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon3'>ID</InputGroup.Text>
          <Form.Control id='basic-url' value={userOwnedInfoData.id} readOnly={true} />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon3'>업체명</InputGroup.Text>
          <Form.Control id='basic-url' defaultValue={userOwnedInfoData.title} onChange={null} />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon3'>업체번호</InputGroup.Text>
          <Form.Control id='basic-url' defaultValue={userOwnedInfoData.number} onChange={null} />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon3'>업체주소</InputGroup.Text>
          <Form.Control id='basic-url' defaultValue={userOwnedInfoData.address} onChange={null} />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon3'>대표사진</InputGroup.Text>
          <Form.Control id='basic-url' type='file' onChange={null} />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>소개말</InputGroup.Text>
          <Form.Control id='admin__user-info--intro' as='textarea' defaultValue={userOwnedInfoData.content} onChange={null} />
        </InputGroup>
        <button className='admin__user-submit' type='submit'>
          저장
        </button>
      </div>
      <div>
        <TitleBox title='업체 메뉴' />
        {category.map((v) => (
          <>
            <div className='admin__user-subtitle'>
              <span>{v}</span>
            </div>
            <div className='admin__user-menu'>
              <div>
                {userOwnedMenuData
                  .filter((menu) => menu.category === v)
                  .map((menu) => (
                    <>
                      <Form.Control type='file' />
                      <InputGroup className='mb-3'>
                        <Form.Control defaultValue={menu.name} />
                        <Form.Control defaultValue={menu.price} />
                      </InputGroup>
                    </>
                  ))}
              </div>
              <button className='admin__user-submit' type='submit'>
                저장
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Admin;
