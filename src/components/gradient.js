import React from 'react';
import { Link } from 'gatsby';
// import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const Gradient = () => {
  return <GradientBackground tag='section'></GradientBackground>;
};

export default Gradient;

const GradientBackground = styled.div`
  width: 100%;
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
