import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';

import { ThemeContext } from '../styles';

const DarkModeSwitch = props => {
  const { themeType, setThemeType } = useContext(ThemeContext);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const handleClick = () => {
    setIsAnimationActive(true);
    setTimeout(() => {
      setThemeType(themeType === 'dark' ? 'light' : 'dark');
      setIsAnimationActive(false);
    }, 1200);
  };

  const classes = `${themeType === 'dark' ? 'turning-light' : 'turning-dark'} ${
    isAnimationActive ? 'animating' : ''
  } 
  ${themeType === 'dark' && !isAnimationActive ? 'show-sun' : ''}
  ${themeType === 'light' && !isAnimationActive ? 'show-moon' : ''}
  `;

  return (
    <>
      {themeType && (
        <IconButton
          bgcolor={themeType === 'dark' ? 'var(--secondary)' : 'var(--primary)'}
          onClick={handleClick}
          {...props}
        >
          <Sun>
            <DotsWrapper className={classes}>
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </DotsWrapper>
          </Sun>
        </IconButton>
      )}
    </>
  );
};

export default DarkModeSwitch;

const IconButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  justify-content: center;
  padding: 0;
  height: 44px;
  width: 44px;

  &:focus,
  &:hover {
    & > div,
    li {
      background: ${({ bgcolor }) => bgcolor};
    }
  }
`;

const Sun = styled.div`
  background: var(--headerColor);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
`;

const DotsWrapper = styled.ul`
  --dotSize: 3px;

  border-radius: 50%;
  height: var(--dotSize);
  left: 50%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: var(--dotSize);

  &.animating li {
    &:nth-of-type(1) {
      --animationName: dot1;
      --numDot: 1;
    }
    &:nth-of-type(2) {
      --animationName: dot2;
      --numDot: 2;
    }
    &:nth-of-type(3) {
      --animationName: dot3;
      --numDot: 3;
    }
    &:nth-of-type(4) {
      --animationName: dot4;
      --numDot: 4;
    }
    &:nth-of-type(5) {
      --animationName: dot5;
      --numDot: 5;
    }
    &:nth-of-type(6) {
      --animationName: dot6;
      --numDot: 6;
    }
  }

  &.turning-dark li {
    animation-direction: normal;
  }
  &.turning-light li {
    animation-direction: reverse;
  }

  &.show-sun li {
    opacity: 1;

    &:nth-of-type(1) {
      transform: rotate(-60deg) translate3d(14px, 0, 0);
    }
    &:nth-of-type(2) {
      transform: translate3d(0, -3px, 0) translate3d(14px, 0, 0);
    }
    &:nth-of-type(3) {
      transform: translate3d(0, -6px, 0) rotate(60deg) translate3d(14px, 0, 0);
    }
    &:nth-of-type(4) {
      transform: translate3d(0, -9px, 0) rotate(120deg) translate3d(14px, 0, 0);
    }
    &:nth-of-type(5) {
      transform: translate3d(0, -12px, 0) rotate(180deg) translate3d(14px, 0, 0);
    }
    &:nth-of-type(6) {
      transform: translate3d(0, -15px, 0) rotate(240deg) translate3d(14px, 0, 0);
    }
  }

  &.show-moon li {
    opacity: 0;

    &:nth-of-type(1) {
      opacity: 1;
      background: var(--background);
      transform: rotate(-60deg) scale(4) translate3d(1px, 0.5px, 0);
    }
    &:nth-of-type(2) {
      transform: translate3d(0, -3px, 0);
    }
    &:nth-of-type(3) {
      transform: translate3d(0, -6px, 0);
    }
    &:nth-of-type(4) {
      transform: translate3d(0, -9px, 0);
    }
    &:nth-of-type(5) {
      transform: translate3d(0, -12px, 0);
    }
    &:nth-of-type(6) {
      transform: translate3d(0, -15px, 0);
    }
  }

  & li {
    animation: var(--animationName) 1s ease-out;
    animation-fill-mode: forwards;
    background: var(--headerColor);
    padding: 0;
    margin: 0;
    opacity: 1;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    z-index: 10;
    animation-fill-mode: forwards;

    @keyframes dot1 {
      0% {
        opacity: 0;
        background: var(--background);
        transform: rotate(-60deg) scale(4) translate3d(1px, 0.5px, 0);
      }
      17% {
        opacity: 1;
        transform: rotate(-60deg) translate3d(14px, 0, 0);
      }
      33% {
        opacity: 1;
        transform: rotate(-60deg) translate3d(14px, 0, 0);
      }
      50% {
        opacity: 1;
        transform: rotate(-60deg) translate3d(14px, 0, 0);
      }
      67% {
        opacity: 1;
        transform: rotate(-60deg) translate3d(14px, 0, 0);
      }
      83% {
        opacity: 1;
        transform: rotate(-60deg) translate3d(14px, 0, 0);
      }
      100% {
        opacity: 1;
        transform: rotate(-60deg) translate3d(14px, 0, 0);
      }
    }

    @keyframes dot2 {
      0% {
        opacity: 0;
        transform: translate3d(0, -3px, 0);
      }
      17% {
        opacity: 1;
        transform: translate3d(0, calc(-3px * calc(var(--numDot) - 1)), 0)
          rotate(-60deg) translate3d(14px, 0, 0);
      }
      33% {
        opacity: 1;
        transform: translate3d(0, -3px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      50% {
        opacity: 1;
        transform: translate3d(0, -3px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      67% {
        opacity: 1;
        transform: translate3d(0, -3px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      83% {
        opacity: 1;
        transform: translate3d(0, -3px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, -3px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
    }

    @keyframes dot3 {
      0% {
        opacity: 0;
        transform: translate3d(0, -6px, 0);
      }
      17% {
        opacity: 1;
        transform: translate3d(0, -6px, 0) rotate(-60deg)
          translate3d(14px, 0, 0);
      }
      33% {
        opacity: 1;
        transform: translate3d(0, -6px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      50% {
        opacity: 1;

        transform: translate3d(0, -6px, 0) rotate(60deg) translate3d(14px, 0, 0);
      }
      67% {
        opacity: 1;

        transform: translate3d(0, -6px, 0) rotate(60deg) translate3d(14px, 0, 0);
      }
      83% {
        opacity: 1;

        transform: translate3d(0, -6px, 0) rotate(60deg) translate3d(14px, 0, 0);
      }
      100% {
        opacity: 1;

        transform: translate3d(0, -6px, 0) rotate(60deg) translate3d(14px, 0, 0);
      }
    }
    @keyframes dot4 {
      0% {
        opacity: 0;
        transform: translate3d(0, -9px, 0);
      }
      17% {
        opacity: 1;
        transform: translate3d(0, -9px, 0) rotate(-60deg)
          translate3d(14px, 0, 0);
      }
      33% {
        transform: translate3d(0, -9px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      50% {
        opacity: 1;
        transform: translate3d(0, -9px, 0) rotate(60deg) translate3d(14px, 0, 0);
      }
      67% {
        opacity: 1;
        transform: translate3d(0, -9px, 0) rotate(120deg)
          translate3d(14px, 0, 0);
      }
      83% {
        opacity: 1;
        transform: translate3d(0, -9px, 0) rotate(120deg)
          translate3d(14px, 0, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, -9px, 0) rotate(120deg)
          translate3d(14px, 0, 0);
      }
    }
    @keyframes dot5 {
      0% {
        opacity: 0;
        transform: translate3d(0, -12px, 0);
      }
      17% {
        opacity: 1;
        transform: translate3d(0, -12px, 0) rotate(-60deg)
          translate3d(14px, 0, 0);
      }
      33% {
        opacity: 1;
        transform: translate3d(0, -12px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      50% {
        opacity: 1;
        transform: translate3d(0, -12px, 0) rotate(60deg)
          translate3d(14px, 0, 0);
      }
      67% {
        opacity: 1;
        transform: translate3d(0, -12px, 0) rotate(120deg)
          translate3d(14px, 0, 0);
      }
      83% {
        opacity: 1;
        transform: translate3d(0, -12px, 0) rotate(180deg)
          translate3d(14px, 0, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, -12px, 0) rotate(180deg)
          translate3d(14px, 0, 0);
      }
    }

    @keyframes dot6 {
      0% {
        opacity: 0;
        transform: translate3d(0, -15px, 0);
      }
      17% {
        opacity: 1;
        transform: translate3d(0, -15px, 0) rotate(-60deg)
          translate3d(14px, 0, 0);
      }
      33% {
        opacity: 1;
        transform: translate3d(0, -15px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      50% {
        opacity: 1;
        transform: translate3d(0, -15px, 0) rotate(60deg)
          translate3d(14px, 0, 0);
      }
      67% {
        opacity: 1;
        transform: translate3d(0, -15px, 0) rotate(120deg)
          translate3d(14px, 0, 0);
      }
      83% {
        opacity: 1;
        transform: translate3d(0, -15px, 0) rotate(180deg)
          translate3d(14px, 0, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, -15px, 0) rotate(240deg)
          translate3d(14px, 0, 0);
      }
    }
  }
`;
