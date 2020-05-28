import React from 'react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Section = ({ section: { body } }) => {
  return (
    <Wrapper>
      <MDXRenderer>{body}</MDXRenderer>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.ul`
  align-self: stretch;

  &:not(:first-of-type) {
    margin-top: calc(2 * var(--spacing));
  }

  &:not(:last-of-type) {
    border-bottom: 2px solid var(--secondary);
    padding-bottom: calc(2 * var(--spacing));
  }
`;
