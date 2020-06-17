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
      <DateText className='caption'>
        Published on {post.published_date}
      </DateText>
      <p>{post.excerpt}</p>
      <StyledLink to={`/writing/${post.slug}/`}>Read more...</StyledLink>
    </SectionWrapper>
  );
};

export default PostPreview;

const StyledLink = styled(Link)`
  display: inline-block;
`;

const DateText = styled.p`
  font-weight: 600;
`;
