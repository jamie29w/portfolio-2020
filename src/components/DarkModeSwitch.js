import React, { useContext } from 'react';
import { Brightness3, WbSunny } from '@material-ui/icons';

import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeSwitch = () => {
  const {
    palette: {
      background: { secondary: bgSecondary },
      common: { white },
      type,
    },
    setThemeType,
  } = useContext(ThemeContext);

  return (
    <>
      {type === 'dark' ? (
        <WbSunny
          onClick={() => setThemeType('light')}
          style={{ color: white }}
        />
      ) : (
        <Brightness3
          onClick={() => setThemeType('dark')}
          style={{ color: bgSecondary, transform: 'rotate(20deg)' }}
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
