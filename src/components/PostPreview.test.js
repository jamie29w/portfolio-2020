import React from 'react';
import renderer from 'react-test-renderer';

import PostPreview from './PostPreview';
import { ThemeProvider } from '../styles';

describe('PostPreview', () => {
  const mockPost = {
    title: 'mockPostTitle',
    excerpt: 'mocPostExcerpt lorem ipsum...',
    slug: 'mock-post-slug',
  };

  it('renders correctly in light mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'light'}>
          <PostPreview post={mockPost} />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });

  it('renders correctly in dark mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'dark'}>
          <PostPreview post={mockPost} />
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
