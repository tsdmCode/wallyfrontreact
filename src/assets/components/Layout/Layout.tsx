import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import style from './layout.module.scss';

export function Layout() {
  return (
    <div className={style.layoutContainer}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
