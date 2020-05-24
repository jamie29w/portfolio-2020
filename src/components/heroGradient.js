import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '@emotion/core';
import { Link } from 'gatsby';

const Hero = () => {
  const {
    palette: {
      background: { primary: bgPrimary },
      primary,
      secondary,
      success,
    },
    spacing,
    text,
  } = useContext(ThemeContext);

  return (
    <HeroWrapper
      bgcolor={bgPrimary}
      color2={secondary}
      color1={bgPrimary}
      spacing={spacing}
    >
      <div>
        <h4>Jamie Woodmancy</h4>
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
        Let's Do This
      </HomePageLink>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  background: ${({ color2, color1 }) =>
    `linear-gradient(150deg, ${color2} 16%, ${color1} 74%)`};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 55px);
  justify-content: space-between;
  padding: ${({ spacing }) => spacing}rem;
  position: relative;
`;

const TitleText = styled.h2`
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
