import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../Button/Button';

export function ThemeSwitcher() {
  const { isDark, toggleData } = useContext(ThemeContext);

  return <Button onClick={toggleData} text={isDark ? 'Dark Mode!' : 'Light Mode!'} type="button" />;
}
