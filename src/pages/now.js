import React from 'react';
import styled from '@emotion/styled';

import { Layout, NowSection, Seo } from '../components';
import { useNowContent } from '../hooks';

const pageTitle = 'Now';

const Now = () => {
  const nowSections = useNowContent();

  return (
    <Layout title={pageTitle}>
      <Seo title={pageTitle} />
      <p>I'm really bad at favorites. But here are my currents:</p>
      <NowSectionWrapper>
        {nowSections.map((section, i) => (
          <NowSection section={section} key={i} />
        ))}
      </NowSectionWrapper>
    </Layout>
  );
};

export default Now;

const NowSectionWrapper = styled.div`
  margin-top: var(--spacing);
`;
