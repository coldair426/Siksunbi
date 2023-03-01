import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SiksunbiContents({ infoData }) {
  return (
    <main className='siksunbi-contents'>
      {infoData.map((v, i) => (
        <Link className='siksunbi-contents__link' to={`/${v.id}`} key={i}>
          <Card className='siksunbi-contents__card' style={{ width: '100%' }} key={i}>
            <Card.Body className='siksunbi-contents__body' key={i}>
              <Card.Title className='siksunbi-contents__title' key={`title${i}`}>
                {v.title}
              </Card.Title>
              <Card.Subtitle className='mb-2 text-muted siksunbi-contents__subtitle' key={`subTitle${i}`}>
                {v.address}
              </Card.Subtitle>
              {/* content 문장 자르기 */}
              <Card.Text className='siksunbi-contents__text' key={`text${i}`}>
                {v.content.substring(0, 45)} ⋯
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </main>
  );
}

export default SiksunbiContents;
