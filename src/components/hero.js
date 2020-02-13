import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
// import Gradient from './gradient';

const Hero = () => {
  return (
    <HeroWrapper>
      <TextBox>
        <h1>hi, I'm </h1>
        <h1>Jamie Woodmancy</h1>
      </TextBox>
      <Gradient />
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  position: relative;
  height: 527px;
  background: #fff;
`;

const Gradient = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  /* todo: make height more versatile */
  height: 527px;
  min-height: 100%;
  overflow: hidden;
  -webkit-transform: skewY(-12deg);
  transform: skewY(-12deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
  background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  z-index: 5;

  h1 {
    color: #ffffff;
    text-shadow: 1px 5px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;
