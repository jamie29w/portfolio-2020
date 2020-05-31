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
      <StyledH3>{title}:</StyledH3>
      <GridList>
        <MDXRenderer>{body}</MDXRenderer>
      </GridList>
    </SectionWrapper>
  );
};

export default NowSection;

const GridList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  & > li {
    margin-top: var(--spacing);
  }

  @media (min-width: 62em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledH3 = styled.h3`
  margin-top: 0;
`;
