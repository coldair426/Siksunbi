import React from 'react';
import { Card } from 'react-bootstrap';

function MenuContents({ menuByCategory }) {
  return menuByCategory.map((v, i) => {
    return (
      <div key={`${i}`}>
        <Card key={`${i}Card`} className='menu__item'>
          <Card.Img key={`${i}CardImg`} variant='top' src={v.imgsrc} alt='menuImage' />
          <Card.Body key={`${i}CardBody`} className='menu__item--body'>
            <div key={`${i}divA`}>{v.name}</div>
            <div key={`${i}divB`}>{`${v.price}원`}</div>
          </Card.Body>
        </Card>
      </div>
    );
  });
}

export default MenuContents;
