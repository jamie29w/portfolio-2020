import React, { useContext } from 'react';
import { css, ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  const { colors, padding } = useContext(ThemeContext);

  return (
    <Article colors={colors} padding={padding}>
      <h3
        css={css`
          margin-bottom: calc(0.25 * ${padding});
        `}
      >
        <Link to={`/writing/${post.slug}/`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Link to={`/writing/${post.slug}/`}>read more &rarr;</Link>
    </Article>
  );
};

export default PostPreview;

const Article = styled.article`
  margin-top: ${({ padding }) => padding};

  & :not(:last-of-type) {
    border-bottom: ${({ colors }) => `2px solid ${colors.accentMid}`};
    margin-bottom: ${({ padding }) => padding};
    padding-bottom: ${({ padding }) => padding};
  }
`;
