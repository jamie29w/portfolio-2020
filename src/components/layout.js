import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css, ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { padding, colors } = useContext(ThemeContext);

  const PageTitle = styled.h1`
    border-bottom: 2px solid ${colors.accentMid};
    padding: 0 0 calc(0.5 * ${padding});
  `;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={css`
          margin: 0 auto;
          padding: 0 ${padding} ${padding};
        `}
      >
        <PageTitle>{title}</PageTitle>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
