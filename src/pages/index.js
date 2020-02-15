import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

import SEO from '../components/seo';
import HeroGradient from '../components/heroGradient';
import Footer from '../components/footer';

const IndexPage = () => {
  const { colors, text } = useContext(ThemeContext);

  const IndexPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  const HomePageLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: ${`2px solid ${colors.primary}`};
    width: 245px;
    height: 68px;
    color: ${colors.primary};
    font-size: ${text.bodyFontSize};
    font-weight: 600;
    text-align: center;
    text-decoration: none;
  `;

  return (
    <IndexPageWrapper>
      <SEO title='Hello' />
      <HeroGradient>
        <div>{/* empty div to move other content down */}</div>
        <div>
          <h1>web</h1>
          <h1>developer</h1>
        </div>
        <HomePageLink to='/writing/'>let's do this</HomePageLink>
      </HeroGradient>
      <Footer />
    </IndexPageWrapper>
  );
};

export default IndexPage;
