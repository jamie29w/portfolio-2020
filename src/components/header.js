import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <HeaderWrapper>
      <InnerWrapper>
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
          <DarkModeSwitch
            css={css`
              margin-bottom: calc(0.25 * var(--spacing));
              margin-left: calc(0.25 * var(--spacing));
            `}
          />
        </NavLinksWrapper>
        <SoloDMSwitchWrapper>
          <DarkModeSwitch
            css={css`
              margin-bottom: calc(0.25 * var(--spacing));
              margin-left: calc(0.25 * var(--spacing));
            `}
          />
        </SoloDMSwitchWrapper>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  @media (min-width: 62rem) {
    background-color: var(--background);
    box-shadow: var(--shadowBottom);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 var(--gutterHorizontal);
  }
`;

const InnerWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1080px;
  padding: 0;

  @media (min-width: 62em) {
    padding: 0;
  }
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

const SoloDMSwitchWrapper = styled.div`
  display: flex;

  @media (min-width: 62em) {
    display: none;
  }
`;
