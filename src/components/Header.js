import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';
import HeaderNavLink from './HeaderNavLink';

const Header = () => {
  const [showShadow, setShowShadow] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const _window = window;
      const heightDiff = parseInt(nameRef.current.offsetHeight);
      const scrollPos = _window.scrollY;
      setShowShadow(scrollPos > heightDiff);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper showShadow={showShadow}>
      <InnerWrapper>
        <NameWrapper ref={nameRef}>
          <Link
            className='h3'
            css={css`
              padding: calc(0.25 * var(--spacing)) 0;
            `}
            to='/'
          >
            Jamie Woodmancy
          </Link>
        </NameWrapper>
        <NavLinksWrapper>
          <HeaderNavLink to='/work/'>Work</HeaderNavLink>
          <HeaderNavLink to='/now/'>Now</HeaderNavLink>
          <HeaderNavLink to='/writing/'>Writing</HeaderNavLink>
          <DarkModeSwitch
            css={css`
              margin-bottom: calc(0.25 * var(--spacing));
              margin-left: calc(0.25 * var(--spacing));
            `}
          />
        </NavLinksWrapper>
        <SoloDMSwitchWrapper>
          <DarkModeSwitch />
        </SoloDMSwitchWrapper>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: var(--background);
  box-shadow: ${({ showShadow }) =>
    showShadow ? 'var(--shadowBottom)' : 'none'};
  left: 0;
  position: fixed;
  top: 0;
  transition: 0.3s;
  padding: var(--gutterVertical) var(--gutterHorizontal);
  width: 100%;
  z-index: 500;

  @media (min-width: 48rem) {
    padding: calc(0.5 * var(--gutterVertical)) var(--gutterHorizontal);
  }

  @media (min-width: 62rem) {
    padding: calc(0.5 * var(--gutterVertical)) var(--gutterHorizontal);
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

const NameWrapper = styled.h3`
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

const SoloDMSwitchWrapper = styled.div`
  display: flex;

  @media (min-width: 62em) {
    display: none;
  }
`;
