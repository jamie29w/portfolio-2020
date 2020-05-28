import React from 'react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const NowListSection = ({ section: { body } }) => {
  return (
    <Wrapper>
      <MDXRenderer>{body}</MDXRenderer>
    </Wrapper>
  );
};

export default NowListSection;

const Wrapper = styled.ul`
  &:not(:first-of-type) {
    margin-top: calc(2 * var(--spacing));
  }

  &:not(:last-of-type) {
    border-bottom: 2px solid var(--secondary);
    padding-bottom: calc(2 * var(--spacing));
  }
`;
