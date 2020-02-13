/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme, GlobalComponent } from './src/styles';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalComponent />
    {element}
  </ThemeProvider>
);
