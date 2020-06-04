import React from 'react';
import renderer from 'react-test-renderer';

import Post from './Post';
import { ThemeProvider } from '../styles';

import mdxString from '../../__mocks__/mdxRenderer-mock';

describe('Post', () => {
  const mockData = {
    currentPost: {
      frontmatter: { title: 'Current Post Mock Title' },
      body: mdxString,
    },
    prevPost: {
      frontmatter: {
        title: 'PrevPost Mock Title',
        slug: 'prev-post-mock-slug',
      },
    },
    nextPost: {
      frontmatter: {
        title: 'NextPost Mock Title',
        slug: 'next-post-mock-slug',
      },
    },
  };

  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <Post data={mockData} />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
