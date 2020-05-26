import React from 'react';

import Layout from '../components/layout';
import Section from '../components/Section';
import SEO from '../components/seo';
import useNowContent from '../hooks/useNowContent';

const pageTitle = 'Now';

const Now = () => {
  const nowSections = useNowContent();

  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      {nowSections.map((section, i) => (
        <Section section={section} key={i} />
      ))}
    </Layout>
  );
};

export default Now;
