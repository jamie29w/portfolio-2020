import React from 'react';
import styled from '@emotion/styled';

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
      <WorkSections>
        {workSections.map((section, i) => (
          <Section section={section} key={i} />
        ))}
      </WorkSections>
    </Layout>
  );
};

export default Work;

const WorkSections = styled.div``;
