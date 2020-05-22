import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

export const query = graphql`
  query($nextPostSlug: String, $prevPostSlug: String, $slug: String!) {
    currentPost: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        author
        published_date
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
    }
    nextPost: mdx(frontmatter: { slug: { eq: $nextPostSlug } }) {
      frontmatter {
        title
        slug
      }
    }
    prevPost: mdx(frontmatter: { slug: { eq: $prevPostSlug } }) {
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
  const { spacing } = useContext(ThemeContext);
  return (
    <Layout>
      <h2>{frontmatter.title}</h2>
      <p>Posted by {frontmatter.author}</p>
      {frontmatter.image?.sharp?.fluid && (
        <ImageBackground
          fadeIn='soft'
          fluid={frontmatter.image.sharp.fluid}
          spacing={spacing}
          tag='section'
        />
      )}
      <MDXRenderer>{body}</MDXRenderer>

      <ButtonWrapper>
        {prevPost ? (
          <Link to={`/writing/${prevPost.frontmatter.slug}`}>
            &larr; {prevPost.frontmatter.title}
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link to={`/writing/${nextPost.frontmatter.slug}`}>
            {nextPost.frontmatter.title} &rarr;
          </Link>
        ) : (
          <div />
        )}
      </ButtonWrapper>
    </Layout>
  );
};

export default PostTemplate;

const ImageBackground = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  height: 50vh;
  margin-top: ${({ spacing }) => spacing}rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
