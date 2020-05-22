import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  const {
    colors: { accentLight },
    spacing,
  } = useContext(ThemeContext);

  return (
    <Article borderColor={accentLight} spacing={spacing}>
      <Link to={`/writing/${post.slug}/`}>
        <h4>{post.title}</h4>
      </Link>
      <p>{post.excerpt}</p>
      <Link to={`/writing/${post.slug}/`}>read more &rarr;</Link>
    </Article>
  );
};

export default PostPreview;

const Article = styled.article`
  &:not(:last-of-type) {
    border-bottom: ${({ borderColor }) => `2px solid ${borderColor}`};
    padding-bottom: ${({ spacing }) => spacing}rem;
  }
`;
