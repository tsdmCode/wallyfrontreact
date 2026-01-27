import { NavLink } from 'react-router-dom';
import style from './navbar.module.scss';

export function NavBar() {
  const navItems = ['Home', 'Plakater', 'Om_os', 'Kontakt', 'Login'];
  const activeStyles = {
    color: '#d97852',
  };
  const renderedItems = navItems.map((item) => {
    return (
      <li>
        <NavLink
          key={item}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          to={item.toLowerCase() === 'home' ? '/' : item.toLowerCase() === 'om_os' ? '/about' : `/${item}`}
        >
          {item.replace('_', ' ')}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={style.navBar}>
      <ul>{renderedItems}</ul>
    </nav>
  );
}
