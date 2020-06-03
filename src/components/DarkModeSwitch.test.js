import React from 'react';
import renderer from 'react-test-renderer';

import DarkModeSwitch from './DarkModeSwitch';
import { ThemeProvider } from '../styles';

describe('DarkModeSwitch', () => {
  it('renders correctly in light mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'light'}>
          <DarkModeSwitch />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });

  it('renders correctly in dark mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'dark'}>
          <DarkModeSwitch />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
