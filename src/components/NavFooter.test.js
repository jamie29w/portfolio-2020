import React from 'react';
import renderer from 'react-test-renderer';

import NavFooter from './NavFooter';
import { ThemeProvider } from '../styles';

describe('NavFooter', () => {
  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <NavFooter />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
