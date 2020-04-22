import React from 'react';
import styled from '@emotion/styled';

import Footer from '../components/footer';
import HeroGradient from '../components/heroGradient';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <IndexPageWrapper>
      <SEO title='Hello' />
      <HeroGradient />
      <Footer />
    </IndexPageWrapper>
  );
};

export default IndexPage;

const IndexPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;
