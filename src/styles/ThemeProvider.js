import React, { createContext, useEffect, useState } from 'react';
import { colors } from './colors';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
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
      '--primaryActive',
      newValue === 'light'
        ? colors.light.primaryActive
        : colors.dark.primaryActive
    );

    root.style.setProperty(
      '--secondary',
      newValue === 'light' ? colors.light.secondary : colors.dark.secondary
    );

    root.style.setProperty(
      '--secondaryActive',
      newValue === 'light'
        ? colors.light.secondaryActive
        : colors.dark.secondaryActive
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
      '--gradient1HomePage',
      newValue === 'light'
        ? colors.light.gradient1HomePage
        : colors.dark.gradient1HomePage
    );

    root.style.setProperty(
      '--gradient2HomePage',
      newValue === 'light'
        ? colors.light.gradient2HomePage
        : colors.dark.gradient2HomePage
    );

    root.style.setProperty(
      '--darkModeSwitchHover',
      newValue === 'light' ? colors.light.primary : colors.dark.secondary
    );

    root.style.setProperty(
      '--boxShadowColor',
      newValue === 'light'
        ? colors.light.boxShadowColor
        : colors.dark.boxShadowColor
    );

    root.style.setProperty(
      '--navFooterBackground',
      newValue === 'light'
        ? colors.light.navFooterBackground
        : colors.dark.navFooterBackground
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
};
