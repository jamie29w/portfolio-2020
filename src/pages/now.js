import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useNowContent from '../hooks/useNowContent';

import NowSection from '../components/NowSection';
const pageTitle = 'Now';

const Now = () => {
  const nowSections = useNowContent();

  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
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
