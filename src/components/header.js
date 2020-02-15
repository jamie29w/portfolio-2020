import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';

const Header = () => {
  const { colors, padding, text } = useContext(ThemeContext);

  const StyledLink = styled(Link)`
    color: ${colors.primary};
    padding: ${padding};
    font-size: ${text.bodyFontSize};
    text-decoration: none;

    &.current-page {
      border-bottom: 2px solid ${colors.primary};
    }
  `;

  return (
    <header
      style={{
        background: '#fff',
        color: colors.primary,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <StyledLink activeClassName='current-page' to='/writing/'>
          Writing
        </StyledLink>
        <StyledLink activeClassName='current-page' to='/about/'>
          About
        </StyledLink>
        <StyledLink activeClassName='current-page' to='/work/'>
          Work
        </StyledLink>
      </div>
    </header>
  );
};

export default Header;
