import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';
import { ThemeProvider } from '../styles';

describe('Header', () => {
  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <Header />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
