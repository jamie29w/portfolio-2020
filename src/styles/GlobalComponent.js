import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

import '../styles/fontFaces.css';

// This component provides the global styles reset and
// base styles for the app.
// GlobalComponent is a single source of styling for the
// gatsby-browser.js and gatsby-ssr.js files which both
// act as the root of the project.

export const GlobalComponent = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html {
            /* initial palette CSS Vars are hung in gatsby-ssr */
            --headerFontFamily: 'Raleway', sans-serif;
            --bodyFontFamily: 'Open Sans', sans-serif;
            --gutterHorizontal: 1rem;
            --gutterVertical: 0.5rem;
            --spacing: 2rem;
            --shadowTop: 0px -5px 20px -4px var(--boxShadowColor);
            --navFooterHeight: 84px;
            --tabletUp: 42em;
            --desktopUp: 55em;
            --bodyFontSize: 1rem;

            background-color: var(--background);
            box-sizing: border-box;
            font-family: sans-serif;
            font-size: 16px;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;

            @media (min-width: 42em) {
              --gutter: 3rem;
            }
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            color: var(--paragraphColor);
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
          .h1,
          h2,
          .h2,
          h3,
          .h3,
          .h3 h4,
          .h4,
          h5,
          .h5 {
            color: var(--headerColor);
            font-family: 'Raleway', sans-serif;
            font-weight: 600;
            line-height: 1.2em;
            padding: 0;
            margin: var(--spacing) 0 0;
          }

          h1,
          .h1 {
            font-size: 3.052rem;
            letter-spacing: -1.5px;
          }

          h2,
          .h2 {
            font-size: 2.441rem;
            letter-spacing: -0.5px;
          }

          h3,
          .h3 {
            font-size: 1.953rem;
            letter-spacing: 0px;
          }

          h4,
          .h4 {
            font-size: 1.563rem;
            letter-spacing: 0.25px;
          }

          h5,
          .h5 {
            font-size: 1.25rem;
            letter-spacing: 0px;
          }

          a,
          p,
          ul,
          li {
            font-family: 'Open Sans', sans-serif;
            font-size: var(--bodyFontSize);
            font-weight: 400;
            letter-spacing: 0.5px;
            line-height: 1.8;
            padding: 0;
            margin: var(--spacing) 0 0;
          }

          a {
            color: var(--primary);
            font-weight: 600;
            text-decoration: none;

            &:focus {
              color: var(--primaryHover);
            }

            @media (hover) {
              &:hover {
                color: var(--primaryHover);
              }
            }
          }

          .btn {
            font-size: 1.25rem;
          }

          .caption {
            font-size: 0.8rem;
            letter-spacing: 0.4px;
          }

          ul {
            padding-left: 0;
            margin-top: 0;
          }

          li {
            list-style: none;
            margin-top: calc(0.5 * var(--spacing));
          }
        `}
      />
    </>
  );
};
