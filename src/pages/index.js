import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/Seo';
import HeroGradient from '../components/HeroGradient';
import Footer from '../components/Footer';

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
