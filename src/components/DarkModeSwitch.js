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
  position: absolute;
  top: 50%;
  left: 50%;
  /* background: green; */
  width: 3px;
  height: 3px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 0;
  margin: 0;

  & > li {
    padding: 0;
    margin: 0;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    z-index: 10;

    &:nth-child(1) {
      background: red;
      /* background: var(--secondary); */
      transform: translate3d(0, 0, 0) rotate(0deg) translate3d(14px, 0, 0);
    }
    &:nth-child(2) {
      background: orange;
      /* background: var(--secondary); */
      transform: translate3d(0, -3px, 0) rotate(60deg) translate3d(14px, 0, 0);
    }
    &:nth-child(3) {
      background: black;
      /* background: var(--secondary); */
      transform: translate3d(0, -6px, 0) rotate(120deg) translate3d(14px, 0, 0);
    }
    &:nth-child(4) {
      background: green;
      /* background: var(--secondary); */
      transform: translate3d(0, -9px, 0) rotate(180deg) translate3d(14px, 0, 0);
    }
    &:nth-child(5) {
      background: blue;
      /* background: var(--secondary); */
      transform: translate3d(0, -12px, 0) rotate(240deg) translate3d(14px, 0, 0);
    }
    &:nth-child(6) {
      background: violet;
      /* background: var(--secondary); */
      transform: translate3d(0, -15px, 0) rotate(300deg) translate3d(14px, 0, 0);
    }
  }
`;
