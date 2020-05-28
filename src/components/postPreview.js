import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  return (
    <Article>
      <Link to={`/writing/${post.slug}/`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.excerpt}</p>
      <Link to={`/writing/${post.slug}/`}>read more</Link>
    </Article>
  );
};

export default PostPreview;

const Article = styled.article`
  &:not(:first-of-type) {
    margin-top: calc(2 * var(--spacing));
  }

  &:not(:last-of-type) {
    border-bottom: 2px solid var(--secondary);
    padding-bottom: calc(2 * var(--spacing));
  }
`;
