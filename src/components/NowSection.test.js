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

  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <NowSection section={mockSection} />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
