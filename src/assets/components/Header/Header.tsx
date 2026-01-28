import { NavBar } from '../NavBar/NavBar';
import style from './header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <h3>Wallywood</h3>
      <NavBar />
    </header>
  );
}
