import React from 'react';

import Layout from '../components/layout';
import PostPreview from '../components/postPreview';
import SEO from '../components/seo';
import usePosts from '../hooks/usePosts';

const pageTitle = 'Writing';

const Writing = () => {
  const posts = usePosts();

  return (
    <Layout title={pageTitle}>
      <SEO title={pageTitle} />
      <p>
        I won't post here often. But when I do, it'll be about debugging, tech
        leadership, and things I learned the hard way.
      </p>

      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Writing;
