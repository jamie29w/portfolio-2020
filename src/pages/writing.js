import React, { useContext } from 'react';

import usePosts from '../hooks/usePosts';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PostPreview from '../components/PostPreview';
import { ThemeContext, css } from '@emotion/core';

const Writing = () => {
  const posts = usePosts();
  const { padding } = useContext(ThemeContext);

  return (
    <Layout title='Writing'>
      <SEO title='Writing' />
      <p
        css={css`
          margin: ${padding} 0;
        `}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        magnam ab, aperiam at enim assumenda, officia rerum distinctio
        recusandae amet veritatis. Minus placeat, illum molestias nemo ex
        laborum ipsam nam.
      </p>

      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Writing;
