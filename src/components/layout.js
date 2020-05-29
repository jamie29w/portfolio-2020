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
        <NavFooter />
      </GradientWrapper>
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
  min-height: 100vh;
  /* gutter + body font-size + padding top and bottom and 1 extra unit of spacing */
  padding-bottom: calc(var(--gutter) + 1rem + calc(3 * var(--spacing)));
  width: 100%;
`;

const LayoutWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: var(--gutter);
  padding-top: 0;
`;

// todo: remove when desktop responsive design is set up
const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 1000px;
`;
