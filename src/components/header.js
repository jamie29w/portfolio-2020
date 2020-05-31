import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <HeaderWrapper>
      <NameLink className='h3' to='/'>
        Jamie Woodmancy
      </NameLink>
      <NavLinksWrapper>
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
      </NavLinksWrapper>
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

const NavLinksWrapper = styled.div`
  display: none;

  @media (min-width: 62em) {
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
