import React from 'react';
import renderer from 'react-test-renderer';

import HomepageMain from './HomepageMain';
import { ThemeProvider } from '../styles';

describe('HomepageMain', () => {
  it('renders correctly in light mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'light'}>
          <HomepageMain />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });

  it('renders correctly in dark mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'dark'}>
          <HomepageMain />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
