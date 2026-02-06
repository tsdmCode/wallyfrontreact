import { useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropdown } from 'react-icons/io';
import style from './sort.module.scss';

interface SortProps {
  setSortKey: (key: string) => void;
  setDirection: (direction: string) => void;
}

export function Sort({ setSortKey, setDirection }: SortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('Sorter');

  function handleClick(key: string, direction: string, text: string | null) {
    setSortKey(key);
    setDirection(direction);
    setActiveSort(text || 'Sorter');
  }

  return (
    <div className={style.sortStyle}>
      <ul onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <li>
          {activeSort} {isOpen ? <IoMdArrowDropdown size={24} /> : <IoMdArrowDropleft size={24} />}
        </li>
        {isOpen && (
          <>
            <li onClick={(e) => handleClick('price', 'asc', (e.target as HTMLLIElement).textContent)}>
              Pris (lavest-højest)
            </li>
            <li onClick={(e) => handleClick('price', 'desc', (e.target as HTMLLIElement).textContent)}>
              Pris (højest-lavest)
            </li>
            <li onClick={(e) => handleClick('name', 'asc', (e.target as HTMLLIElement).textContent)}>Titel (A-Å)</li>
            <li onClick={(e) => handleClick('name', 'desc', (e.target as HTMLLIElement).textContent)}>Titel (Å-A)</li>
          </>
        )}
      </ul>
    </div>
  );
}
