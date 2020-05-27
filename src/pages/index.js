import React, { useContext } from 'react';
import Color from 'color';
import styled from '@emotion/styled';

import Footer from '../components/footer';
import HeroGradient from '../components/heroGradient';
import SEO from '../components/seo';
import { ThemeContext } from '../providers/ThemeProvider';

const IndexPage = () => {
  const {
    palette: {
      background: { primary: bgPrimary },
      primary,
      type,
    },
    spacing,
  } = useContext(ThemeContext);

  return (
    <IndexPageWrapper
      bgcolor={bgPrimary}
      spacing={spacing}
      color2={
        type === 'light'
          ? Color(primary)
              .lighten(0.43)
              .hex()
          : bgPrimary
      }
      color1={bgPrimary}
    >
      <SEO title='Hello' />
      <HeroGradient />
      <Footer />
    </IndexPageWrapper>
  );
};

export default IndexPage;

const IndexPageWrapper = styled.div`
  background: ${({ color1, color2 }) =>
    `linear-gradient(150deg, ${color1} 16%, ${color2} 74%)`};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding-bottom: ${({ spacing }) => spacing}rem;
`;
