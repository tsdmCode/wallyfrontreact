import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthContextProvider } from './assets/context/AuthContextProvider.tsx';
import { ThemeContextProvider } from './assets/context/ThemeContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
