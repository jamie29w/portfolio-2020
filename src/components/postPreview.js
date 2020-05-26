import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { ThemeContext } from '../providers/ThemeProvider';

const PostPreview = ({ post }) => {
  const {
    palette: { tertiary },
    spacing,
  } = useContext(ThemeContext);

  return (
    <Article bordercolor={tertiary} spacing={spacing}>
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
    margin-top: ${({ spacing }) => spacing * 2}rem;
  }
  &:not(:last-of-type) {
    border-bottom: ${({ bordercolor }) => `2px solid ${bordercolor}`};
    padding-bottom: ${({ spacing }) => spacing * 2}rem;
  }
`;
