import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '@emotion/core';
// import Gradient from './gradient';

const Hero = ({ children }) => {
  const { padding } = useContext(ThemeContext);

  const HeroWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    height: 80vh;
    background: #fff;
  `;

  const Gradient = styled.div`
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    -webkit-transform-origin: 0;
    transform-origin: 0;
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
  `;

  const TextBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${padding};
    width: 100%;
    z-index: 5;
    padding: 1em ${padding} 2em;

    h1,
    h2 {
      color: #ffffff;
      /* text-shadow: 1px 3px 3px #ffffff66; */
      font-size: 2rem;
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
  `;

  return (
    <HeroWrapper>
      <Gradient />
      <TextBox>
        <h2>jamie woodmancy</h2>
        <ChildWrapper>{children}</ChildWrapper>
      </TextBox>
    </HeroWrapper>
  );
};

export default Hero;
