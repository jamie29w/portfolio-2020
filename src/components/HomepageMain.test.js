import React from 'react';
import renderer from 'react-test-renderer';

import HomepageMain from './HomepageMain';
import { ThemeProvider } from '../styles';

describe('HomepageMain', () => {
  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <HomepageMain />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
