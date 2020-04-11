import React, { useContext } from 'react';
import { Global, css, ThemeContext } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

// This component provides the global styles reset and
// base styles for the app.
// GlobalComponent is a single source of styling for the
// gatsby-browser.js and gatsby-ssr.js files which both
// act as the root of the project.

export const GlobalComponent = () => {
  const { colors, paddingAsNum } = useContext(ThemeContext);

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans|Roboto&display=swap');
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
            font-family: 'Roboto', cursive;
            letter-spacing: -0.5px;
            padding: 0;
            margin: 0;
          }

          p {
            color: ${colors.bodyText};
            padding: 0;
            margin: 0;
            letter-spacing: 1.1px;
          }

          a {
            color: ${colors.accentMid};
            letter-spacing: 0.5px;
            padding: 0;

            &:hover,
            &:focus {
              color: ${colors.accentMid};
            }
          }

          ul {
            color: ${colors.bodyText};
            padding-left: 0;

            & > li {
              margin-bottom: ${paddingAsNum / 2}rem;
              list-style: none;
            }
          }
        `}
      />
    </>
  );
};
