import React from 'react';
import { Card } from 'react-bootstrap';

function MenuIntroduction() {
  return (
    <Card className='introduction__item'>
      <Card.Img variant='top' src='./img/introduction.png' alt='menuImage' />
      <Card.Body className='introduction__item--body'>
        <div>호구포 식당</div>
        <div>074-441-2966</div>
        <div>강원도 춘천시 지석로12</div>
        <div>
          대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에
          의하여 연임할 수 있다. 대법원에 대법관을 둔다. 다만, 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의
          재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다. 대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 대통령은 국무회의의 의장이 되고,
          국무총리는 부의장이 된다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의
          증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.
        </div>
      </Card.Body>
    </Card>
  );
}

export default MenuIntroduction;
