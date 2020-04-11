import React, { useContext } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

const pageTitle = 'About';

const About = () => {
  const { colors, padding } = useContext(ThemeContext);

  const aboutData = [
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

  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      {aboutData.map(item => (
        <React.Fragment key={item.title}>
          <AboutTitle colors={colors} padding={padding}>
            {item.title}
          </AboutTitle>
          <ul>
            {item.details.map(detailItem => (
              <li>{detailItem}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default About;

const AboutTitle = styled.h2`
  color: ${({ colors }) => colors.accentMid};
  margin-bottom: ${({ padding }) => padding};
`;
