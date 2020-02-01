import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const PostTemplate = () => (
  <Layout>
    <h1>Post Title</h1>
    <p>Posted by Author</p>
    <p>Body goes here</p>
    <Link to='/writing/'>&larr; back to other posts</Link>
  </Layout>
);

export default PostTemplate;
