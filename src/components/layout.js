import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from './footer';
import Header from './header';
import { ThemeContext } from '../providers/ThemeProvider';

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
          <h1>{title}</h1>
          {children}
        </main>
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0 var(--spacing) var(--spacing);
`;
