import { createContext, type SetStateAction, type Dispatch } from 'react';

// TS - inteface til typer
interface ThemeContextProps {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

// Opret context og kald den ThemeContext
export const ThemeContext = createContext<ThemeContextProps>(undefined!);
