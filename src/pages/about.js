import React, { useContext } from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { css, ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

const pageTitle = 'Now';

const About = () => {
  const { colors, padding, paddingAsNum } = useContext(ThemeContext);

  const halfPadding = `${paddingAsNum / 2}rem`;

  const nowData = [
    {
      title: 'Working with',
      details: ['JS', 'React', 'React Native', 'Styled Components'],
    },
    {
      title: 'Reading',
      details: ['Dune Messiah', 'Harry Potter and the Prisoner of Azkaban'],
    },
  ];

  const whatElseData = [
    'playing cornhole with my kids',
    'perfecting my old fashioned',
    'reconsidering my opinions on React app architecture',
    'Stumptown coffee',
  ];

  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      {nowData.map(item => (
        <React.Fragment key={item.title}>
          <AboutTitle colors={colors} padding={halfPadding}>
            {item.title}
          </AboutTitle>
          <ul>
            {item.details.map(detailItem => (
              <li>{detailItem}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
      <p
        css={css`
          margin: ${padding} 0;
        `}
      >
        That's the most important stuff.
      </p>
      <h2
        css={css`
          margin: ${padding} 0;
          color: ${colors.accentMid};
        `}
      >
        What Else?
      </h2>
      <ul>
        {whatElseData.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default About;

const AboutTitle = styled.h2`
  color: ${({ colors }) => colors.accentMid};
  margin-bottom: ${({ padding }) => padding};
`;

const StyledP = styled.p`
  color: ${({ colors }) => colors.bodyText};
  margin-bottom: ${({ padding }) => padding};
`;
