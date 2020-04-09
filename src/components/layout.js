import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css, ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './header';
import Footer from './footer';

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
    margin-bottom: ${padding};
  `;

  return (
    <LayoutWrapper padding={padding}>
      <div
        css={css`
          width: 100%;
        `}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          <PageTitle>{title}</PageTitle>
          {children}
        </main>
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

const FooterWrapper = styled.div`
  justify-self: end;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: ${({ padding }) => padding};
`;
