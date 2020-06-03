import React from 'react';

import { colors, GlobalComponent, ThemeProvider } from './src/styles';

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
      
        if (hasPersistedPreference) {
          return persistedColorPreference;
        }
      
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }
      
        return 'light';
      };

      const colorMode = getInitialColorMode();
      const root = document.documentElement;

      root.style.setProperty(
        '--primary',
        colorMode === 'light' ? '${colors.light.primary}' : '${colors.dark.primary}'
      );

      root.style.setProperty(
        '--primaryHover',
        colorMode === 'light' ? '${colors.light.primaryHover}' : '${colors.dark.primaryHover}'
      );

      root.style.setProperty(
        '--secondary',
        colorMode === 'light' ? '${colors.light.secondary}' : '${colors.dark.secondary}'
      );

      root.style.setProperty(
        '--secondaryHover',
        colorMode === 'light' ? '${colors.light.secondaryHover}' : '${colors.dark.secondaryHover}'
      );

      root.style.setProperty(
        '--headerColor',
        colorMode === 'light' ? '${colors.light.header}' : '${colors.dark.header}'
      );

      root.style.setProperty(
        '--paragraphColor',
        colorMode === 'light' ? '${colors.light.paragraph}' : '${colors.dark.paragraph}'
      );

      root.style.setProperty(
        '--divider',
        colorMode === 'light' ? '${colors.light.divider}' : '${colors.dark.divider}'
      );

      root.style.setProperty(
        '--background',
        colorMode === 'light' ? '${colors.light.background}' : '${colors.dark.background}'
      );

      root.style.setProperty(
        '--gradient1HomePage',
        colorMode === 'light' ? '${colors.light.gradient1HomePage}' : '${colors.dark.gradient1HomePage}'
      );
      
      root.style.setProperty(
        '--gradient2HomePage',
        colorMode === 'light' ? '${colors.light.gradient2HomePage}' : '${colors.dark.gradient2HomePage}'
      );

      root.style.setProperty(
        '--darkModeSwitchHover',
        colorMode === 'light' ? '${colors.light.primaryHover}' : '${colors.dark.secondaryHover}'
      );

      root.style.setProperty(
        '--boxShadowColor',
        colorMode === 'light' ? '${colors.light.boxShadowColor}' : '${colors.dark.boxShadowColor}'
      );

      root.style.setProperty(
        '--navFooterBackground',
        colorMode === 'light' ? '${colors.light.navFooterBackground}' : '${colors.dark.navFooterBackground}'
      );

      root.style.setProperty('--initial-color-mode', colorMode);
    })()
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

// MagicScriptTag hangs all initial CSS Vars based on local storage,
// media query, or default light
// It's inserted above other body components, blocking content render
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <GlobalComponent />
      {element}
    </ThemeProvider>
  );
};
