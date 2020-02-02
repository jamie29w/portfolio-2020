import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        published_date
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>Posted by {post.frontmatter.author}</p>
      <MDXRenderer>{post.body}</MDXRenderer>
      {/* <p>Body goes here</p> */}
      <Link to='/writing/'>&larr; back to other posts</Link>
    </Layout>
  );
};

export default PostTemplate;
