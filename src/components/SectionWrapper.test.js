import React from 'react';
import renderer from 'react-test-renderer';

import SectionWrapper from './SectionWrapper';
import { ThemeProvider } from '../styles';

describe('SectionWrapper', () => {
  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <SectionWrapper />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
