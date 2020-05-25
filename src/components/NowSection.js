import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ThemeContext } from '../providers/ThemeProvider';

const NowListSection = ({ section: { body } }) => {
  const {
    palette: { tertiary },
    spacing,
  } = useContext(ThemeContext);

  return (
    <Wrapper bordercolor={tertiary} spacing={spacing}>
      <MDXRenderer>{body}</MDXRenderer>
    </Wrapper>
  );
};

export default NowListSection;

const Wrapper = styled.ul`
  &:not(:last-of-type) {
    border-bottom: ${({ bordercolor }) => `2px solid ${bordercolor}`};
    padding-bottom: ${({ spacing }) => spacing}rem;
  }
`;
