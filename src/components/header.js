import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';
import { Link } from 'gatsby';

const Header = () => {
  const { colors, spacing, text } = useContext(ThemeContext);

  return (
    <HeaderWrapper colors={colors} spacing={spacing}>
      <Row1 spacing={spacing}>
        <StyledLink
          activeClassName='current-page'
          colors={colors}
          spacing={spacing}
          text={text}
          to='/writing/'
        >
          Writing
        </StyledLink>
        <StyledLink
          activeClassName='current-page'
          colors={colors}
          spacing={spacing}
          text={text}
          to='/now/'
        >
          Now
        </StyledLink>
        <StyledLink
          activeClassName='current-page'
          colors={colors}
          spacing={spacing}
          text={text}
          to='/work/'
        >
          Work
        </StyledLink>
      </Row1>
      <h3
        css={css`
          margin: 0;
          text-align: center;
        `}
      >
        <Link
          to='/'
          css={css`
            text-decoration: none;
          `}
        >
          Jamie Woodmancy
        </Link>
      </h3>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background: ${({ colors }) => colors.background};
  color: ${({ colors }) => colors.primary};
  padding: 0 ${({ spacing }) => spacing}rem;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  flex: 1;
  text-align: center;
  padding: ${({ spacing }) => `${spacing}rem 0`};
  text-decoration: none;

  &.current-page {
    border-bottom: ${({ colors }) => `2px solid ${colors.accentLight}`};
  }
`;
