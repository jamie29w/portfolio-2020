import React, { useContext } from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import Color from 'color';

import { ThemeContext } from '../providers/ThemeProvider';
import '../styles/fontFaces.css';

// This component provides the global styles reset and
// base styles for the app.
// GlobalComponent is a single source of styling for the
// gatsby-browser.js and gatsby-ssr.js files which both
// act as the root of the project.

export const GlobalComponent = () => {
  const {
    palette: {
      background: { primary: bgPrimary },
      primary,
      secondary,
      success,
      text: { primary: bodyText },
    },
    spacing,
  } = useContext(ThemeContext);

  const Secondary = Color(secondary);

  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html {
            background: ${bgPrimary};
            box-sizing: border-box;
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            background: ${bgPrimary};
            color: ${bodyText};
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            margin: 0;
            padding: 0;
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
          h5 {
            color: ${secondary};
            font-family: 'Raleway', sans-serif;
            font-weight: 600;
            padding: 0;
            margin: ${spacing}rem 0 0;
          }

          h1 {
            color: ${primary};
            font-size: 3.052rem;
            letter-spacing: -1.5px;
          }

          h2 {
            color: ${success};
            font-size: 2.441rem;
            letter-spacing: -0.5px;
          }

          h3 {
            font-size: 1.953rem;
            letter-spacing: 0px;
          }

          h4 {
            font-size: 1.563rem;
            letter-spacing: 0.25px;
          }

          h5 {
            font-size: 1.25rem;
            letter-spacing: 0px;
          }

          a,
          p,
          ul,
          li {
            font-family: 'Open Sans', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.5px;
            padding: 0;
            margin: ${spacing}rem 0 0;
          }

          .caption {
            font-size: 0.8rem;
            letter-spacing: 0.4px;
          }

          a {
            color: ${secondary};
            text-decoration: none;

            &:hover,
            &:focus {
              color: ${Secondary.darken(0.5)};
            }
          }

          ul {
            padding-left: 0;
            margin-top: 0;

            & > li {
              list-style: none;
            }
          }
        `}
      />
    </>
  );
};
