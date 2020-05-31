import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import SectionWrapper from './SectionWrapper';

const PostPreview = ({ post }) => {
  return (
    <SectionWrapper>
      <Link className='h3' to={`/writing/${post.slug}/`}>
        {post.title}
      </Link>
      <p>{post.excerpt}</p>
      <StyledLink to={`/writing/${post.slug}/`}>Read more...</StyledLink>
    </SectionWrapper>
  );
};

export default PostPreview;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: var(--spacing);
`;
