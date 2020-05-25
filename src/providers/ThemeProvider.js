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

    const handleThemePreferenceChange = e => {
      setThemeType(e.matches ? 'dark' : 'light');
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleThemePreferenceChange);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleThemePreferenceChange);
    };
  }, []);

  const theme = {
    ...createTheme(themeType),
    setThemeType,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
