import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';
import { ThemeProvider } from '../styles';

describe('Footer', () => {
  it('renders correctly in light mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'light'}>
          <Footer />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });

  it('renders correctly in dark mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'dark'}>
          <Footer />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
