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
      <GradientWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutWrapper>
          <StyledMain>
            <h1>{title}</h1>
            {children}
          </StyledMain>
        </LayoutWrapper>
      </GradientWrapper>
      <NavFooter />
    </>
  );
};

export default Layout;

const GradientWrapper = styled.div`
  background: linear-gradient(
    150deg,
    var(--background) 16%,
    var(--gradient2Layout) 74%
  );
  background-attachment: fixed;
  height: 100vh;
  overflow: scroll;
  width: 100%;
`;

const LayoutWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  /* gutter + body font-size + padding top and bottom */
  margin-bottom: calc(var(--gutter) + 1rem + calc(2 * var(--spacing)));
  padding: var(--gutter);
`;

// todo: remove when desktop responsive design is set up
const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 1000px;
`;
