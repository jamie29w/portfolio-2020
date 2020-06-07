import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderNavLink = ({ children, to, ...other }) => {
  return (
    <StyledLink
      activeClassName='current-page'
      partiallyActive={true}
      to={to}
      {...other}
    >
      {children}
    </StyledLink>
  );
};

export default HeaderNavLink;

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
    background: transparent;
    border-bottom: 2px solid var(--secondary);
    border-top: 2px solid var(--secondary);
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

  @media (hover) {
    &:focus,
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
