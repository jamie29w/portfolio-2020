import React from 'react';
import { Link } from 'gatsby';

import usePosts from '../hooks/usePosts';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostPreview from '../components/postPreview';

const Writing = () => {
  const posts = usePosts();

  return (
    <Layout>
      <SEO title='Writing' />
      <h1>Hi from the writing page</h1>
      <p>Welcome to writing</p>

      <h2>Here are some excellent blog posts</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Writing;
