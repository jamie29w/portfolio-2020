import React, { useContext } from 'react';
import { Brightness3, WbSunny } from '@material-ui/icons';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeSwitch = () => {
  const { themeType, setThemeType } = useContext(ThemeContext);

  return (
    <>
      {themeType === 'dark' ? (
        <IconButton onClick={() => setThemeType('light')}>
          <WbSunny />
        </IconButton>
      ) : (
        <IconButton onClick={() => setThemeType('dark')}>
          <Brightness3 />
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
    transition: 0.3s;
  }

  &:focus,
  &:hover {
    & > svg {
      color: var(--darkModeSwitchHover);
    }
  }
`;
