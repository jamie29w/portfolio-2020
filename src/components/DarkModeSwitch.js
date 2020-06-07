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
          <WbSunny />
        </IconButton>
      ) : (
        <IconButton onClick={() => setThemeType('dark')} {...props}>
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
