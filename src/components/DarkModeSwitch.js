import React, { useContext } from 'react';
import { Brightness3, WbSunny } from '@material-ui/icons';

import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeSwitch = () => {
  const { themeType, setThemeType } = useContext(ThemeContext);

  return (
    <>
      {themeType === 'dark' ? (
        <WbSunny
          onClick={() => setThemeType('light')}
          style={{ color: 'var(--headerColor)' }}
        />
      ) : (
        <Brightness3
          onClick={() => setThemeType('dark')}
          style={{ color: 'var(--headerColor)' }}
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
