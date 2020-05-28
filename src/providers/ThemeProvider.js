import React, { createContext, useEffect, useState } from 'react';
import { colors } from '../styles/colors';

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [themeType, rawSetThemeType] = useState(undefined);

  // reading on render prevents toggle from getting out of sync
  // after MagicScriptTag does its job
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );

    rawSetThemeType(initialColorValue);
  }, []);

  function setThemeType(newValue) {
    const root = window.document.documentElement;

    rawSetThemeType(newValue);
    window.localStorage.setItem('color-mode', newValue);

    root.style.setProperty(
      '--primary',
      newValue === 'light' ? colors.light.primary : colors.dark.primary
    );

    root.style.setProperty(
      '--primaryHover',
      newValue === 'light'
        ? colors.light.primaryHover
        : colors.dark.primaryHover
    );

    root.style.setProperty(
      '--secondary',
      newValue === 'light' ? colors.light.secondary : colors.dark.secondary
    );

    root.style.setProperty(
      '--secondaryHover',
      newValue === 'light'
        ? colors.light.secondaryHover
        : colors.dark.secondaryHover
    );

    root.style.setProperty(
      '--headerColor',
      newValue === 'light' ? colors.light.header : colors.dark.header
    );

    root.style.setProperty(
      '--paragraphColor',
      newValue === 'light' ? colors.light.paragraph : colors.dark.paragraph
    );

    root.style.setProperty(
      '--divider',
      newValue === 'light' ? colors.light.divider : colors.dark.divider
    );

    root.style.setProperty(
      '--background',
      newValue === 'light' ? colors.light.background : colors.dark.background
    );

    root.style.setProperty(
      '--gradient2',
      newValue === 'light' ? colors.light.gradient2 : colors.dark.gradient2
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        themeType,
        setThemeType,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
