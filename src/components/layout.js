import React, { useContext } from 'react';
import { css, ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from './footer';
import Header from './header';

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

  const { spacing } = useContext(ThemeContext);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutWrapper spacing={spacing}>
        <main>
          <h2>{title}</h2>
          {children}
        </main>
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: ${({ spacing }) => spacing}rem;
  padding-top: 0;
  width: 100%;
`;
