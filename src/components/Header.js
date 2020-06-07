import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

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

const StyledLink = styled(Link)`
  align-items: center;
  border: 2px solid transparent;
  display: flex;
  flex: 1;
  grid-area: cta;
  justify-content: center;
  margin-top: 0;
  padding: calc(0.25 * var(--spacing)) 0;
  transition: background-size 0.2s ease-in, border 0.2s ease-in;

  &.current-page {
    border-bottom: 2px solid var(--primary);
    font-weight: 700;
  }

  &:before {
    border-bottom: 2px solid var(--secondary);
    border-top: 2px solid var(--secondary);
    background: transparent;
    height: 100%;
  }

  &:after {
    background: transparent;
    bottom: 0;
    content: '';
    left: 0;
    height: 100%;
    border-left: 2px solid var(--secondary);
    border-right: 2px solid var(--secondary);
    position: absolute;
    transform: scaleY(0);
    transition: all 0.2s ease-in;
    width: 100%;
  }

  &:focus {
    background-size: 100% 100%;
    border: 2px solid transparent;
    transition: background-size 0.2s ease-out, border 0.2s ease-out;

    &:after {
      transform: scaleY(1);
      transition: all 0.2s ease-out;
    }
  }

  @media (hover) {
    &:hover {
      background-size: 100% 100%;
      border: 2px solid transparent;
      transition: background-size 0.2s ease-out, border 0.2s ease-out;

      &:after {
        transform: scaleY(1);
        transition: all 0.2s ease-out;
      }
    }
  }

  @media (min-width: 48em) {
    max-width: 200px;
  }
`;
// const StyledLink = styled(Link)`
//   flex: 1;
//   margin-top: 0;
//   padding: calc(0.25 * var(--spacing)) 0;
//   text-align: center;
//   text-decoration: none;

//   &.current-page {
//     border-bottom: 2px solid var(--primary);
//     font-weight: 700;
//   }

//   @media (min-width: 62em) {
//     background-image: linear-gradient(
//       0deg,
//       var(--primary) 0%,
//       var(--background) 100%
//     );
//     background-position: 0 100%;
//     background-repeat: no-repeat;
//     background-size: 100% 0;
//     transition: background-size 0.2s ease-in;

//     &:hover {
//       background-size: 100% 100%;
//       border-bottom: 2px solid var(--primary);
//       color: var(--background);
//       transition: background-size 0.2s ease-out;
//     }
//   }
// `;

const SoloDMSwitchWrapper = styled.div`
  display: flex;

  @media (min-width: 62em) {
    display: none;
  }
`;
