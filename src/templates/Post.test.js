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

  it('renders correctly in light mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'light'}>
          <Post data={mockData} />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });

  it('renders correctly in dark mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'dark'}>
          <Post data={mockData} />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
