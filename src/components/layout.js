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

  const { padding, paddingAsNum } = useContext(ThemeContext);

  return (
    <LayoutWrapper padding={padding}>
      <div
        css={css`
          width: 100%;
        `}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          <PageTitle padding={padding} paddingAsNum={paddingAsNum}>
            {title}
          </PageTitle>
          {children}
        </main>
      </div>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: ${({ padding }) => padding};
`;

const PageTitle = styled.h1`
  margin-bottom: ${({ padding }) => padding};
  padding: ${({ paddingAsNum }) => `0 0 ${paddingAsNum * 0.5}rem`};
`;
