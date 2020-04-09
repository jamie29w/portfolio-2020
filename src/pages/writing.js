import React from 'react';

import usePosts from '../hooks/usePosts';
import Layout from '../components/layout';
import PostPreview from '../components/postPreview';
import SEO from '../components/seo';

const Writing = () => {
  const posts = usePosts();

  return (
    <Layout title='Writing'>
      <SEO title='Writing' />
      <p>
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
