import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Footer from '../components/footer';
import HeroGradient from '../components/heroGradient';
import SEO from '../components/seo';
import { ThemeContext } from '../providers/ThemeProvider';

const IndexPage = () => {
  const {
    palette: {
      background: { primary: bgPrimary },
    },
    spacing,
  } = useContext(ThemeContext);

  return (
    <IndexPageWrapper bgcolor={bgPrimary} spacing={spacing}>
      <SEO title='Hello' />
      <HeroGradient />
      <Footer />
    </IndexPageWrapper>
  );
};

export default IndexPage;

const IndexPageWrapper = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding-bottom: ${({ spacing }) => spacing}rem;
`;
