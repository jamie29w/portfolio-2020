import React from 'react';
import styled from '@emotion/styled';

const Section = ({ children, ...other }) => {
  return <Wrapper {...other}>{children}</Wrapper>;
};

export default Section;

const Wrapper = styled.div`
  align-self: stretch;

  &:not(:first-of-type) {
    margin-top: calc(2 * var(--spacing));
  }

  &:not(:last-of-type) {
    border-bottom: 2px solid var(--secondary);
    padding-bottom: calc(2 * var(--spacing));
  }
`;
