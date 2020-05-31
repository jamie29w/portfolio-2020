import React from 'react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SectionWrapper from './SectionWrapper';

const NowSection = ({
  section: {
    body,
    frontmatter: { title },
  },
}) => {
  return (
    <SectionWrapper>
      <StyledH3>{title}</StyledH3>
      <GridList>
        <MDXRenderer>{body}</MDXRenderer>
      </GridList>
    </SectionWrapper>
  );
};

export default NowSection;

const GridList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: calc(0.5 * var(--spacing));

  & > li {
    margin-top: calc(0.5var (--spacing));
  }

  @media (min-width: 62em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledH3 = styled.h3`
  margin-top: 0;
`;
