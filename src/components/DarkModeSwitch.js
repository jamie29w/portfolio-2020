import React, { useContext } from 'react';
import { Brightness3, WbSunny } from '@material-ui/icons';
import styled from '@emotion/styled';

import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeSwitch = () => {
  const { themeType, setThemeType } = useContext(ThemeContext);

  return (
    <>
      {themeType === 'dark' ? (
        <IconButton>
          <WbSunny
            onClick={() => setThemeType('light')}
            role='button'
            style={{ color: 'var(--headerColor)' }}
          />
        </IconButton>
      ) : (
        <IconButton>
          <Brightness3
            onClick={() => setThemeType('dark')}
            role='button'
            style={{ color: 'var(--headerColor)' }}
          />
        </IconButton>
      )}
    </>
  );
};

export default DarkModeSwitch;

const IconButton = styled.button`
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;

  &:focus {
    outline: none;
  }
`;
