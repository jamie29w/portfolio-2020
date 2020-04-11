import React, { useContext } from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { css, ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

const pageTitle = 'About';

const About = () => {
  const { colors, padding, paddingAsNum } = useContext(ThemeContext);
  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      <AboutTitle colors={colors} paddingAsNum={paddingAsNum}>
        Jesus&nbsp;<span>first</span>
      </AboutTitle>
      <AboutTitle colors={colors} paddingAsNum={paddingAsNum}>
        Husband&nbsp;<span>to Alexa</span>
      </AboutTitle>
      <AboutTitle colors={colors} paddingAsNum={paddingAsNum}>
        Dad&nbsp;<span>to Asher + Ellie</span>
      </AboutTitle>
      <AboutTitle colors={colors} paddingAsNum={paddingAsNum}>
        Dev&nbsp;<span>JS + React</span>
      </AboutTitle>
      <p
        css={css`
          margin: ${padding} 0;
        `}
      >
        That's the most important stuff.
      </p>
      <h2
        css={css`
          margin-top: ${padding};
        `}
      >
        What Else?
      </h2>
      <ul>
        <li>playing cornhole with my kids</li>
        <li>craft beer + whiskey</li>
        <li>coffee</li>
        <li>front-end architecture</li>
        <li>coffee</li>
      </ul>
    </Layout>
  );
};

export default About;

const AboutTitle = styled.h2`
  color: ${({ colors }) => colors.accentLight};
  display: flex;
  margin-bottom: ${({ paddingAsNum }) => `${paddingAsNum / 2}rem`};

  & > span {
    color: ${({ colors }) => colors.bodyText};
    display: flex;
  }
`;
