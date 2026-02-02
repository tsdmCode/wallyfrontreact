import { NavBar } from '../NavBar/NavBar';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import style from './header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <h3>Wallywood</h3>
      <NavBar />
      <ThemeSwitcher />
    </header>
  );
}
