import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';
import { ThemeContext } from '../providers/ThemeProvider';

const Hero = () => {
  const theme = useContext(ThemeContext);
  const {
    palette: {
      background: { primary: bgPrimary },
      primary,
      secondary,
      success,
    },
    spacing,
    text,
  } = theme;

  return (
    <HeroWrapper color1={secondary} color2={bgPrimary} spacing={spacing}>
      <div>
        <h2>Jamie Woodmancy</h2>
        <SwitchWrapper spacing={spacing}>
          <DarkModeSwitch />
        </SwitchWrapper>
        <TitleText color={primary} spacing={spacing}>
          Front
        </TitleText>
        <TitleText color={primary}>End</TitleText>
        <TitleText color={primary}>Engineer</TitleText>
      </div>
      <HomePageLink
        color={success}
        text={text}
        to='/writing/'
        spacing={spacing}
      >
        See my work
      </HomePageLink>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  background: ${({ color1, color2 }) =>
    `linear-gradient(150deg, ${color1} 16%, ${color2} 74%)`};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 55px);
  justify-content: space-between;
  padding: ${({ spacing }) => spacing}rem;
  position: relative;
`;

const SwitchWrapper = styled.div`
  margin-top: ${({ spacing }) => spacing}rem;
`;

const TitleText = styled.h1`
  color: ${({ color }) => color};
  margin-top: ${({ spacing }) => (spacing ? 4 * spacing : 0)}rem;
`;

const HomePageLink = styled(Link)`
  align-items: center;
  border: ${({ color }) => `2px solid ${color}`};
  color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  font-weight: 600;
  height: 68px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 100%;
  z-index: 5;
`;
