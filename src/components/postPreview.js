import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';

const PostPreview = ({ post }) => {
  const { padding, colors } = useContext(ThemeContext);

  const Article = styled.article`
    margin-top: ${padding};

    & :not(:last-of-type) {
      border-bottom: 2px solid ${colors.accentMid};
      margin-bottom: ${padding};
      padding-bottom: ${padding};
    }
  `;

  return (
    <Article>
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
