import React from 'react';
import styled from '@emotion/styled';

import HeroGradient from '../components/heroGradient';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <IndexPageWrapper>
      <SEO title='Hello' />
      <HeroGradient />
    </IndexPageWrapper>
  );
};

export default IndexPage;

const IndexPageWrapper = styled.div`
  background: linear-gradient(
    150deg,
    var(--background) 16%,
    var(--gradient2HomePage) 74%
  );
  min-height: 100vh;
`;
