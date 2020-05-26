import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import { ThemeContext } from '../providers/ThemeProvider';

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
      {frontmatter.edited_date ? (
        <p>
          Written by {frontmatter.author}. Updated on {frontmatter.edited_date}.
        </p>
      ) : (
        <p>
          Posted by {frontmatter.author} on {frontmatter.published_date}.
        </p>
      )}
      {frontmatter.image?.sharp?.fluid && (
        <ImageBackground
          alt={frontmatter.image_alt}
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
  height: 30vh;
  margin-top: ${({ spacing }) => spacing}rem;
  max-height: 200px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > a,
  & > div {
    max-width: 45vw;
  }
`;
