import { NavLink } from 'react-router-dom';
import style from './navbar.module.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export function NavBar() {
  const navItems = ['Home', 'Plakater', 'Om_os', 'Kontakt'];
  const { userData, logout } = useContext(AuthContext);
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
      <ul>
        {renderedItems}
        {userData ? (
          <li onClick={logout}>Logout</li>
        ) : (
          <li>
            <NavLink to={'/login'}>Log In</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
