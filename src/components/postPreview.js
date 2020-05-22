import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  const { colors, spacing } = useContext(ThemeContext);

  return (
    <Article colors={colors} spacing={spacing}>
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
  & :not(:last-of-type) {
    border-bottom: ${({ colors }) => `2px solid ${colors.accentMid}`};
    padding-bottom: ${({ spacing }) => spacing}rem;
  }
`;
