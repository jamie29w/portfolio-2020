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

  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <PostPreview post={mockPost} />
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
