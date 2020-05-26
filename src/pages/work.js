import React from 'react';

import Layout from '../components/layout';
import Section from '../components/Section';
import SEO from '../components/seo';
import useWorkContent from '../hooks/useWorkContent';

const pageTitle = 'Work';

const Work = () => {
  const workSections = useWorkContent();

  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      {workSections.map((section, i) => (
        <Section section={section} key={i} />
      ))}
    </Layout>
  );
};

export default Work;
