import React from 'react';
import { Card } from 'react-bootstrap';

function MenuIntroduction({ info }) {
  return (
    <Card className='introduction__item'>
      <Card.Img variant='top' src={info.img} alt='menuImage' />
      <Card.Body className='introduction__item--body'>
        <div>{info.title}</div>
        <div>{info.number}</div>
        <div>{info.address}</div>
        <div>{info.content}</div>
      </Card.Body>
    </Card>
  );
}

export default MenuIntroduction;
