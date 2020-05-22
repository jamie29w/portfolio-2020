import React, { useContext } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import { ThemeContext } from '@emotion/core';

const pageTitle = 'Now';

const Now = () => {
  const {
    colors: { accentLight },
    spacing,
  } = useContext(ThemeContext);

  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      {nowData.map(item => (
        <React.Fragment key={item.title}>
          <h4>{item.title}</h4>
          <StyledUl borderColor={accentLight} spacing={spacing}>
            {item.details.map(detailItem => (
              <li key={detailItem}>{detailItem}</li>
            ))}
          </StyledUl>
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default Now;

const StyledUl = styled.ul`
  &:not(:last-of-type) {
    border-bottom: ${({ borderColor }) => `2px solid ${borderColor}`};
    padding-bottom: ${({ spacing }) => spacing}rem;
  }
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
