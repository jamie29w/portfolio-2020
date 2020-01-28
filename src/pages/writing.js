import React from 'react';
import { Link } from 'gatsby';

import usePosts from '../hooks/usePosts';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Writing = () => {
  const posts = usePosts();
  return (
    <Layout>
      <SEO title='Writing' />
      <h1>Hi from the writing page</h1>
      <p>Welcome to writing</p>

      <h2>Here are some excellent blog posts</h2>
      {posts.map(post => (
        <pre key={post.slug}>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  );
};

export default Writing;
