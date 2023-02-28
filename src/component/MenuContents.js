import React from 'react';
import { Card } from 'react-bootstrap';

function MenuContents() {
  return (
    <div>
      <Card className='menu__item'>
        <Card.Img variant='top' src='./img/김치만두.jpg' alt='menuImage' />
        <Card.Body className='menu__item--body'>
          <div>김치만두</div>
          <div>5,000원</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenuContents;
