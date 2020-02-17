import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '@emotion/core';

const Hero = ({ children }) => {
  const { padding, colors } = useContext(ThemeContext);

  const HeroWrapper = styled.div`
    display: flex;
    flex: 1;
    height: 80vh;
    background: #fdc830; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      #d61b11 -21%,
      #f55b2d 36%,
      #ffc09c 79%,
      #fff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      #d61b11 -21%,
      #f55b2d 36%,
      #ffc09c 79%,
      #fff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 5;

    h1,
    h2,
    h3 {
      color: #ffffff;
    }

    h1 {
      font-size: 2.75rem;
    }
  `;

  const ChildWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${padding} ${padding} calc(8 * ${padding});
  `;

  return (
    <HeroWrapper>
      <ChildWrapper>{children}</ChildWrapper>
    </HeroWrapper>
  );
};

export default Hero;
