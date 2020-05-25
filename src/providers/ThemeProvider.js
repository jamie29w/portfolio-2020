import React, { createContext, useEffect, useState } from 'react';
import createTheme from '../styles';

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [themeType, setThemeType] = useState('light');

  useEffect(() => {
    if (
      window?.matchMedia &&
      window?.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeType('dark');
    }
  }, []);

  const theme = {
    ...createTheme(themeType),
    setThemeType,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
