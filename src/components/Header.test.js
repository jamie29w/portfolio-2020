import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';
import { ThemeProvider } from '../styles';

describe('Header', () => {
  it('renders correctly in light mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'light'}>
          <Header />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });

  it('renders correctly in dark mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'dark'}>
          <Header />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
