import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <HeaderWrapper>
      <NameLink className='h3' to='/'>
        Jamie Woodmancy
      </NameLink>
      <NavLinks>
        <StyledLink activeClassName='current-page' to='/writing/'>
          Writing
        </StyledLink>
        <StyledLink activeClassName='current-page' to='/now/'>
          Now
        </StyledLink>
        <StyledLink activeClassName='current-page' to='/work/'>
          Work
        </StyledLink>
      </NavLinks>
      <DarkModeSwitch />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  padding: var(--gutterHorizontal);
  padding: 0;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
`;

const NameLink = styled(Link)`
  flex: 1.5;
  margin-top: 0;
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 55em) {
    align-items: flex-end;
    display: flex;
    flex: 1;
    margin-right: var(--spacing);
  }
`;

const StyledLink = styled(Link)`
  flex: 1;
  margin-top: 0;
  padding: calc(0.5 * var(--spacing)) 0;
  text-align: center;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid var(--primary);
    font-weight: 700;
  }
`;
