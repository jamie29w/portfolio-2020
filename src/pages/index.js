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
  background: linear-gradient(
    150deg,
    var(--background) 16%,
    var(--gradient2) 74%
  );
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding-bottom: var(--spacing);
`;
