import React from 'react';
import renderer from 'react-test-renderer';

import HeaderNavLink from './HeaderNavLink';
import { ThemeProvider } from '../styles';

describe('HeaderNavLink', () => {
  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <HeaderNavLink to='/'>Test HeaderNavLink Text</HeaderNavLink>
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
