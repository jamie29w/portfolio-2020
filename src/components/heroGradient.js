import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';
import { Link } from 'gatsby';

const Hero = () => {
  const { padding, colors, text } = useContext(ThemeContext);

  const footerHeight = `${text.bodyFontSizeNum * 3}px`;

  const HeroWrapper = styled.div`
    position: relative;
    height: calc(100vh - ${footerHeight});
    background: #fff;
  `;

  const Gradient = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    height: 80vh;
    overflow: hidden;
    -webkit-transform: skewY(-12deg);
    transform: skewY(-12deg);
    -webkit-transform-origin: 0;
    transform-origin: 0;
    background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
  `;

  const TextBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${padding};
    width: 100%;
    z-index: 5;

    h1 {
      color: ${colors.background};
      font-size: 2.25rem;
    }
  `;

  const HomePageLink = styled(Link)`
    display: flex;
    position: absolute;
    bottom: ${padding};
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: ${`2px solid ${colors.accentMid}`};
    width: 245px;
    height: 68px;
    color: ${colors.accentMid};
    font-size: ${text.bodyFontSize};
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    z-index: 5;
  `;

  return (
    <HeroWrapper>
      <TextBox>
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
      <HomePageLink to='/writing/'>let's do this</HomePageLink>
    </HeroWrapper>
  );
};

export default Hero;
