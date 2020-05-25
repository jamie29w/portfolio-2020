import React from 'react';

import Layout from '../components/layout';
import NowSection from '../components/NowSection';
import SEO from '../components/seo';

const pageTitle = 'Now';

const Now = () => {
  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      {nowData.map(section => (
        <NowSection key={section.title} section={section} />
      ))}
    </Layout>
  );
};

export default Now;

const nowData = [
  {
    title: 'Working with',
    details: ['JS', 'React', 'React Native', 'Styled Components'],
  },
  {
    title: 'Reading',
    details: ['Dune Messiah', 'Harry Potter and the Prisoner of Azkaban'],
  },
  {
    title: 'Listening to',
    details: ['Syntax', 'Front End Happy Hour'],
  },
  {
    title: 'What else',
    details: [
      'Playing cornhole with my kids',
      'Perfecting my old fashioned',
      'Reconsidering my opinions on React app architecture',
      'Stumptown coffee + Chemex',
    ],
  },
];
