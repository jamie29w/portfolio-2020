import React from 'react';
import renderer from 'react-test-renderer';

import DarkModeSwitch from './DarkModeSwitch';
import { ThemeProvider } from '../styles';

describe('DarkModeSwitch', () => {
  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <DarkModeSwitch />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
