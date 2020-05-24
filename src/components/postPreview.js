import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  const {
    palette: { tertiary },
    spacing,
  } = useContext(ThemeContext);

  return (
    <Article bordercolor={tertiary} spacing={spacing}>
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
    border-bottom: ${({ bordercolor }) => `2px solid ${bordercolor}`};
    padding-bottom: ${({ spacing }) => spacing}rem;
  }
`;
