import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const NavFooter = () => {
  return (
    <NavFooterWrapper>
      <StyledLink
        activeClassName='current-page'
        partiallyActive={true}
        to='/work/'
      >
        Work
      </StyledLink>
      <StyledLink
        activeClassName='current-page'
        partiallyActive={true}
        to='/now/'
      >
        Now
      </StyledLink>
      <StyledLink
        activeClassName='current-page'
        partiallyActive={true}
        to='/writing/'
      >
        Writing
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
  left: 0;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 500;

  @media (min-width: 62em) {
    display: none;
  }
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
