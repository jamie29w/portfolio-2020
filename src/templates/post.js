import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

import Layout from '../components/layout';

export const query = graphql`
  query(
    $slug: String!,
    $prevPostSlug: String,
    $nextPostSlug: String,
  ) {
    currentPost: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        published_date
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
    prevPost: mdx(frontmatter: { slug: { eq: $prevPostSlug } }) {
      frontmatter {
        title
        slug
      }
    }
    nextPost: mdx(frontmatter: { slug: { eq: $nextPostSlug } }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;

const PostTemplate = ({
  data: {
    currentPost: { frontmatter, body },
    prevPost,
    nextPost,
  },
}) => {
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>Posted by {frontmatter.author}</p>
      {frontmatter.image?.sharp?.fluid && (
        <ImageBackground
          tag='section'
          fluid={frontmatter.image.sharp.fluid}
          fadeIn='soft'
        />
      )}
      <MDXRenderer>{body}</MDXRenderer>

      <ButtonWrapper>

      {prevPost ? <Link to={`/writing/${prevPost.frontmatter.slug}`}>&larr; {prevPost.frontmatter.title}</Link> : <div/>}
      {nextPost ? <Link to={`/writing/${nextPost.frontmatter.slug}`}>{nextPost.frontmatter.title} &rarr;</Link> : <div/>}
      </ButtonWrapper>
    </Layout>
  );
};

export default PostTemplate;

const ImageBackground = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  height: 50vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`