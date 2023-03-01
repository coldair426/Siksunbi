import React from 'react';
import { Card } from 'react-bootstrap';

function MenuIntroduction({ dataSelect }) {
  return (
    <Card className='introduction__item'>
      <Card.Img variant='top' src={`${dataSelect.img}`} alt='image' />
      <Card.Body className='introduction__item--body'>
        <div>{dataSelect.title}</div>
        <div>{dataSelect.number}</div>
        <div>{dataSelect.address}</div>
        <div>{dataSelect.content}</div>
      </Card.Body>
    </Card>
  );
}

export default MenuIntroduction;
