import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const NavFooter = () => {
  return (
    <NavFooterWrapper>
      <StyledLink activeClassName='current-page' to='/writing/'>
        Writing
      </StyledLink>
      <StyledLink activeClassName='current-page' to='/now/'>
        Now
      </StyledLink>
      <StyledLink activeClassName='current-page' to='/work/'>
        Work
      </StyledLink>
    </NavFooterWrapper>
  );
};

export default NavFooter;

const NavFooterWrapper = styled.div`
  background-color: var(--navFooterBackground);
  bottom: 0;
  box-shadow: var(--shadowTop);
  display: flex;
  /* gutter + body font-size + padding top and bottom */
  height: calc(var(--gutter) + 1rem + calc(2 * var(--spacing)));
  left: 0;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 900;
`;

const StyledLink = styled(Link)`
  flex: 1;
  margin-top: 0;
  padding: var(--spacing) 0;
  text-align: center;
  text-decoration: none;

  &.current-page {
    border-top: 2px solid var(--primary);
    font-weight: 700;
  }
`;
