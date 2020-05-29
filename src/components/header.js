import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <HeaderWrapper>
      <NameRow>
        <Link
          className='h3'
          css={css`
            margin-top: 0;
          `}
          to='/'
        >
          Jamie Woodmancy
        </Link>
        <DarkModeSwitch />
      </NameRow>
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
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: var(--background);
  padding: 0 var(--gutter);
`;

const NameRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing) 0 0;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  flex: 1;
  margin-top: 0;
  padding: var(--spacing) 0;
  text-align: center;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid var(--primary);
    font-weight: 700;
  }
`;
