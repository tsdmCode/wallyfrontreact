import { NavBar } from '../NavBar/NavBar';
import style from './header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <h1>Wallywood</h1>
      <NavBar />
    </header>
  );
}
