import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavRow>
        <StyledLink activeClassName='current-page' to='/writing/'>
          Writing
        </StyledLink>
        <StyledLink activeClassName='current-page' to='/now/'>
          Now
        </StyledLink>
        <StyledLink activeClassName='current-page' to='/work/'>
          Work
        </StyledLink>
      </NavRow>
      <NavRow2>
        <Link
          css={css`
            margin-top: 0;
          `}
          to='/'
        >
          Jamie Woodmancy
        </Link>
        <DarkModeSwitch />
      </NavRow2>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  color: var(--primary);
  padding: 0 var(--spacing);
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavRow2 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing) calc(2 * var(--spacing)) 0;
`;

const StyledLink = styled(Link)`
  flex: 1;
  padding: var(--spacing) 0;
  text-align: center;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid var(--secondary);
    font-weight: 700;
  }
`;
