import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

import SEO from '../components/seo';
import HeroGradient from '../components/heroGradient';
import Footer from '../components/footer';

const IndexPage = () => {
  const IndexPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  return (
    <IndexPageWrapper>
      <SEO title='Hello' />
      <HeroGradient />
      <Footer />
    </IndexPageWrapper>
  );
};

export default IndexPage;
