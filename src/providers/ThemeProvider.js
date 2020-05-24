import React, { createContext, useState } from 'react';
import createTheme from '../styles';

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [themeType, setThemeType] = useState('light');

  const toggleDarkMode = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light');
  };

  const theme = {
    ...createTheme(themeType),
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
