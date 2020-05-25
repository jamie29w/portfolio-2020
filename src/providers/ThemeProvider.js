import React, { createContext, useState } from 'react';
import createTheme from '../styles';

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [themeType, setThemeType] = useState('light');

  const theme = {
    ...createTheme(themeType),
    setThemeType,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
