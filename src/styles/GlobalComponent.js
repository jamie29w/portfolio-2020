import React, { useContext } from 'react';
import { Global, css, ThemeContext } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

// todo: turn this into a a JSDoc comment
// This component provides the global styles reset and
// base styles for the app.
// GlobalComponent is a single source of styling for the
// gatsby-browser.js and gatsby-ssr.js files which both
// act as the root of the project.

export const GlobalComponent = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans|Nunito&display=swap');
          ${emotionNormalize}
          html {
            font-family: sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }

          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            background: ${colors.background};
            margin: 0;
            font-family: 'Alegreya', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${colors.primary};
            font-family: 'Nunito', cursive;
            padding: 0 16px;
            margin: 0;
          }

          p {
            color: ${colors.bodyText};
            padding: 0 16px;
            margin: 0;
          }
        `}
      />
    </>
  );
};