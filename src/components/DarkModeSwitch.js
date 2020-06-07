import React, { useContext } from 'react';
import { Brightness3, WbSunny } from '@material-ui/icons';
import styled from '@emotion/styled';

import { ThemeContext } from '../styles';

const DarkModeSwitch = props => {
  const { themeType, setThemeType } = useContext(ThemeContext);

  return (
    <>
      {themeType === 'dark' ? (
        <IconButton onClick={() => setThemeType('light')} {...props}>
          <Sun>
            <DotsWrapper>
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </DotsWrapper>
          </Sun>
          {/* <WbSunny /> */}
        </IconButton>
      ) : (
        <IconButton onClick={() => setThemeType('dark')} {...props}>
          <Sun>
            <DotsWrapper>
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </DotsWrapper>
          </Sun>
          {/* <Brightness3 /> */}
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

  & > svg {
    color: var(--headerColor);
    height: 32;
    width: 32;
    transition: 0.2s;
  }

  &:focus,
  &:hover {
    & > svg {
      color: var(--darkModeSwitchHover);
      transition: 0.2s;
    }
  }
`;

const Sun = styled.div`
  background: var(--secondary);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
`;

const DotsWrapper = styled.ul`
  --numDots: 6;
  --dotSize: 3px;
  --ease: ease-out;
  --numDot: 0;

  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--dotSize);
  height: var(--dotSize);
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 0;
  margin: 0;

  & > li {
    animation: var(--animationName) 1s ease-out;
    animation-fill-mode: forwards;
    background: var(--secondary);
    padding: 0;
    margin: 0;
    opacity: 0;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    z-index: 10;

    &:nth-child(1) {
      --animationName: dot1;
      --numDot: 1;
    }
    &:nth-child(2) {
      --animationName: dot2;
      --numDot: 2;
    }
    &:nth-child(3) {
      --animationName: dot3;
      --numDot: 3;
    }
    &:nth-child(4) {
      --animationName: dot4;
      --numDot: 4;
    }
    &:nth-child(5) {
      --animationName: dot5;
      --numDot: 5;
    }
    &:nth-child(6) {
      --animationName: dot6;
      --numDot: 6;
    }

    @keyframes dot1 {
      0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
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
        transform: translate3d(0, -3px, 0);
      }
      17% {
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
        transform: translate3d(0, -6px, 0);
      }
      17% {
        transform: translate3d(0, -6px, 0) rotate(-60deg)
          translate3d(14px, 0, 0);
      }
      33% {
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
        transform: translate3d(0, -9px, 0);
      }
      17% {
        transform: translate3d(0, -9px, 0) rotate(-60deg)
          translate3d(14px, 0, 0);
      }
      33% {
        transform: translate3d(0, -9px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      50% {
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
        transform: translate3d(0, -12px, 0);
      }
      17% {
        transform: translate3d(0, -12px, 0) rotate(-60deg)
          translate3d(14px, 0, 0);
      }
      33% {
        transform: translate3d(0, -12px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      50% {
        transform: translate3d(0, -12px, 0) rotate(60deg)
          translate3d(14px, 0, 0);
      }
      67% {
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
        transform: translate3d(0, -15px, 0);
      }
      17% {
        transform: translate3d(0, -15px, 0) rotate(-60deg)
          translate3d(14px, 0, 0);
      }
      33% {
        transform: translate3d(0, -15px, 0) rotate(0deg) translate3d(14px, 0, 0);
      }
      50% {
        transform: translate3d(0, -15px, 0) rotate(60deg)
          translate3d(14px, 0, 0);
      }
      67% {
        transform: translate3d(0, -15px, 0) rotate(120deg)
          translate3d(14px, 0, 0);
      }
      83% {
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
