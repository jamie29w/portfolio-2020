import React from 'react';
import renderer from 'react-test-renderer';

import NowSection from './NowSection';
import { ThemeProvider } from '../styles';

import mdxString from '../../__mocks__/mdxRenderer-mock';

describe('NowSection', () => {
  const mockSection = {
    body: mdxString,
    frontmatter: { title: 'mock title for now section' },
  };

  it('renders correctly in light mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'light'}>
          <NowSection section={mockSection} />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });

  it('renders correctly in dark mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'dark'}>
          <NowSection section={mockSection} />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
