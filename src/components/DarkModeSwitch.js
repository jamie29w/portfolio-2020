import React, { useContext } from 'react';
import { Brightness3, WbSunny } from '@material-ui/icons';
import styled from '@emotion/styled';

import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeSwitch = () => {
  const { themeType, setThemeType } = useContext(ThemeContext);

  return (
    <>
      {themeType === 'dark' ? (
        <IconButton onClick={() => setThemeType('light')}>
          <WbSunny style={{ color: 'var(--headerColor)' }} />
        </IconButton>
      ) : (
        <IconButton onClick={() => setThemeType('dark')}>
          <Brightness3 style={{ color: 'var(--headerColor)' }} />
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
`;
