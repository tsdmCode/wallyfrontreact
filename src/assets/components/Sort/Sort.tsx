import { useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropdown } from 'react-icons/io';
import style from './sort.module.scss';

interface HandleClickTypes {
  key: string;
  direction: string;
  text: () => string;
}

export function Sort({ setSortKey, setDirection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('Sorter');

  function handleClick(key, direction, text) {
    setSortKey(key);
    setDirection(direction);
    setActiveSort(text);
  }

  return (
    <div className={style.sortStyle}>
      <ul onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <li>
          {activeSort} {isOpen ? <IoMdArrowDropdown size={24} /> : <IoMdArrowDropleft size={24} />}
        </li>
        {isOpen && (
          <>
            <li onClick={(e) => handleClick('price', 'asc', e.target.textContent)}>Pris (lavest-højest)</li>
            <li onClick={(e) => handleClick('price', 'desc', e.target.textContent)}>Pris (højest-lavest)</li>
            <li onClick={(e) => handleClick('name', 'asc', e.target.textContent)}>Titel (A-Å)</li>
            <li onClick={(e) => handleClick('name', 'desc', e.target.textContent)}>Titel (Å-A)</li>
          </>
        )}
      </ul>
    </div>
  );
}
