/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import createTheme, { GlobalComponent } from './src/styles';

const theme = createTheme();

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalComponent />
    {element}
  </ThemeProvider>
);
