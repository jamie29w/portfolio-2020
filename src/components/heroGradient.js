import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';
import { Link } from 'gatsby';

const Hero = () => {
  const { colors, padding, text } = useContext(ThemeContext);

  return (
    <HeroWrapper footerHeight={text.bodyFontSizeAsNum * 3}>
      <TextBox colors={colors} padding={padding}>
        <h2>jamie woodmancy</h2>
        <div
          css={css`
            position: relative;
            top: 30%;
          `}
        >
          <h1>web</h1>
          <h1>developer</h1>
        </div>
      </TextBox>
      <Gradient />
      <HomePageLink
        colors={colors}
        text={text}
        to='/writing/'
        padding={padding}
      >
        let's do this
      </HomePageLink>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  position: relative;
  height: ${({ footerHeight }) => `{calc(100vh - ${footerHeight}px)}`};
  background: #fff;
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
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ padding }) => padding};
  width: 100%;
  z-index: 5;

  h1 {
    color: ${({ colors }) => colors.background};
    font-size: 2.25rem;
  }
`;

const HomePageLink = styled(Link)`
  display: flex;
  position: absolute;
  bottom: ${({ padding }) => padding};
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${`2px solid ${({ colors }) => colors.accentMid}`};
  width: 245px;
  height: 68px;
  color: ${({ colors }) => colors.accentMid};
  font-size: ${({ text }) => text.bodyFontSize};
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  z-index: 5;
`;
