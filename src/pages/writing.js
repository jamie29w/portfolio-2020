import React from 'react';
import styled from '@emotion/styled';

import { Layout, PostPreview, Seo } from '../components';
import { usePosts } from '../hooks';

const pageTitle = 'Writing';

const Writing = () => {
  const posts = usePosts();

  return (
    <Layout title={pageTitle}>
      <Seo title={pageTitle} />
      <p>
        I only promise...to write here. This isn't{' '}
        <a
          href='https://css-tricks.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          CSS Tricks
        </a>
        ,{' '}
        <a
          href='https://joshwcomeau.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Josh Comeau
        </a>
        , or{' '}
        <a href='https://syntax.fm/' rel='noopener noreferrer' target='_blank'>
          Syntax
        </a>
        . I don't live on social media, and I'm not a cool enough to be a brand
        on my own. But likely subjects include: pro tips and technical rants,
        pictures of smoked meat, and parenting hacks.
      </p>
      <p>P.S. I have mad respect for them though!</p>
      <p>
        P.P.S. Work asked me to make sure you know that, "All &lt;the things&gt;
        are mine alone."
      </p>

      <PostPreviewsWrapper>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </PostPreviewsWrapper>
    </Layout>
  );
};

export default Writing;

const PostPreviewsWrapper = styled.div`
  border-top: 2px solid var(--secondary);
  margin-top: calc(2 * var(--spacing));
  padding-top: calc(2 * var(--spacing));
`;
