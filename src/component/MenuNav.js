import React, { useEffect } from 'react';

function MenuNav({ category, active, setActive }) {
  // 활성화된 버튼 스타일 적용
  useEffect(() => {
    // 스타일 적용 실행
    document.querySelectorAll('button')[active].classList.add('nav-active');
    // 스타일 적용 전 먼저 실행(clean up func)
    return () => {
      document.querySelectorAll('button')[active].classList.remove('nav-active');
    };
  }, [active]); // active가 변할 때 마다 실행
  return (
    <nav className='nav'>
      <img src='/icon/language.png' alt='translate-icon' />
      <div>
        <button onClick={() => setActive(0)} className={'nav-item'}>
          소개
        </button>
        {/* category 별로 button 생성 */}
        {category.map((v, i) => (
          <button onClick={() => setActive(i + 1)} key={`${v}${i}`} className={'nav-item'}>
            {v}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default MenuNav;
