import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import NavFooter from './NavFooter';

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

  return (
    <>
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>
          <h1>{title}</h1>
          {children}
        </Main>
        <NavFooter />
      </LayoutWrapper>
    </>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  background: var(--background);
  background-attachment: fixed;
  min-height: 100%;
  padding: var(--gutterVertical) var(--gutterHorizontal);
  width: 100%;

  @media (min-width: 48em) {
    padding: var(--gutterVertical) var(--gutterHorizontal)
      calc(var(--gutterVertical) + 1rem);
  }
`;

const Main = styled.main`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: var(--spacing) auto 0;
  max-width: 1080px;
  min-height: 80vh;
  padding-bottom: calc(var(--gutterVertical) + 2rem + calc(2 * var(--spacing)));

  @media (min-width: 62em) {
    padding-bottom: 0;
  }
`;
