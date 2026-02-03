import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
interface ThemeContextProviderInterface {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderInterface) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    function getLocalThemeState() {
      if (localStorage.getItem('themeData')) {
        const json = JSON.parse(localStorage.getItem('themeData')!);
        setIsDark(json);
      }
    }
    getLocalThemeState();
  }, []);

  useEffect(() => {
    if (isDark !== null) localStorage.setItem('themeData', JSON.stringify(isDark));
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleData = () => {
    setIsDark(!isDark);
  };

  return <ThemeContext.Provider value={{ isDark, setIsDark, toggleData }}>{children}</ThemeContext.Provider>;
};
