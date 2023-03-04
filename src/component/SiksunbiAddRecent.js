import React from 'react';
import { Link } from 'react-router-dom';

function SiksunbiAddRecent({ infoData }) {
  return (
    <div className='siksunbi-add-recent'>
      {infoData.map((v, i) => (
        <Link to={`/${v.id}`} key={i}>
          <div className='siksunbi-add-recent__card' key={i}>
            <div>
              <div key={`title${i}`}>{v.title}</div>
              <div key={`subtitle${i}`}>{v.address}</div>
              {/* content 문장 자르기 */}
              <div key={`contents${i}`}>{v.content.substring(0, 45)} ⋯</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SiksunbiAddRecent;
