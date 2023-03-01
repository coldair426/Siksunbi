import React from 'react';

function MenuNav({ category, active, setActive }) {
  return (
    <nav className='nav'>
      <img src='/icon/language.png' alt='translate-icon' />
      <div>
        {/* active 클래스 추가하는 jsx */}
        <button onClick={() => setActive(0)} className={active === 0 ? 'nav-intro nav-active' : 'nav-intro'}>
          소개
        </button>
        {/* category 별로 button 생성 */}
        {category.map((v, i) => (
          <button onClick={() => setActive(i + 1)} key={`${v}${i}`} className={active === i + 1 ? 'nav-item nav-active' : 'nav-item'}>
            {v}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default MenuNav;
