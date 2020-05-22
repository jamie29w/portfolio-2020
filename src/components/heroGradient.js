import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';
import { Link } from 'gatsby';

const Hero = () => {
  const { colors, padding, text } = useContext(ThemeContext);

  return (
    <HeroWrapper>
      <TextBox colors={colors} padding={padding}>
        <h4>Jamie Woodmancy</h4>
        <div
          css={css`
            position: relative;
            top: 10%;
          `}
        >
          <TitleText>Front</TitleText>
          <TitleText>End</TitleText>
          <TitleText>Engineer</TitleText>
        </div>
      </TextBox>
      <Gradient />
      <HomePageLink
        colors={colors}
        text={text}
        to='/writing/'
        padding={padding}
      >
        Let's Do This
      </HomePageLink>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  background: #fff;
  height: calc(100vh - 55px);
  position: relative;
`;

const TitleText = styled.h2`
  color: white;
`;

const Gradient = styled.div`
  background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
  height: 80vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform: skewY(-12deg);
  -webkit-transform: skewY(-12deg);
  transform-origin: 0;
  -webkit-transform-origin: 0;
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ padding }) => padding};
  position: absolute;
  width: 100%;
  z-index: 5;

  h1 {
    color: ${({ colors }) => colors.background};
  }
`;

const HomePageLink = styled(Link)`
  align-items: center;
  border: ${({ colors }) => `2px solid ${colors.accentMid}`};
  color: ${({ colors }) => colors.accentMid};
  bottom: ${({ padding }) => padding};
  display: flex;
  flex-direction: column;
  font-weight: 600;
  height: 68px;
  justify-content: center;
  left: 50%;
  position: absolute;
  text-align: center;
  text-decoration: none;
  transform: translateX(-50%);
  width: 245px;
  z-index: 5;
`;
