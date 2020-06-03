import React from 'react';
import styled from '@emotion/styled';

import { HomepageMain, Seo } from '../components';

const IndexPage = () => {
  return (
    <IndexPageWrapper>
      <Seo title='Home' />
      <HomepageMain />
    </IndexPageWrapper>
  );
};

export default IndexPage;

const IndexPageWrapper = styled.div`
  background: linear-gradient(
    140deg,
    var(--gradient1HomePage) 51%,
    var(--gradient2HomePage) 66%
  );
  min-height: 100vh;

  @media (min-width: 48em) {
    background: linear-gradient(
      140deg,
      var(--gradient1HomePage) 51%,
      var(--gradient2HomePage) 76%
    );
  }
  @media (min-width: 62em) {
    background: linear-gradient(
      140deg,
      var(--gradient1HomePage) 51%,
      var(--gradient2HomePage) 66%
    );
  }
`;
