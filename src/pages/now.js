import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

const pageTitle = 'Now';

const Now = () => {
  const { colors, padding } = useContext(ThemeContext);

  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      {nowData.map(item => (
        <React.Fragment key={item.title}>
          <NowTitle colors={colors} padding={padding}>
            {item.title}
          </NowTitle>
          <ul>
            {item.details.map(detailItem => (
              <li key={detailItem}>{detailItem}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default Now;

const NowTitle = styled.h2`
  color: ${({ colors }) => colors.accentMid};
  margin-bottom: ${({ padding }) => padding};
`;

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
