import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';
import { ThemeProvider } from '../styles';

describe('Footer', () => {
  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <Footer />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
