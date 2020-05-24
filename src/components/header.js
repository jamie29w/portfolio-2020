import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { ThemeContext } from '../providers/ThemeProvider';

const Header = () => {
  const {
    palette: {
      primary,
      tertiary,
      text: { hint: hintTextColor },
    },
    spacing,
  } = useContext(ThemeContext);

  return (
    <HeaderWrapper color={primary} spacing={spacing}>
      <NavRow spacing={spacing}>
        <StyledLink
          activeClassName='current-page'
          bordercolor={tertiary}
          spacing={spacing}
          to='/writing/'
        >
          Writing
        </StyledLink>
        <StyledLink
          activeClassName='current-page'
          bordercolor={tertiary}
          spacing={spacing}
          to='/now/'
        >
          Now
        </StyledLink>
        <StyledLink
          activeClassName='current-page'
          bordercolor={tertiary}
          spacing={spacing}
          to='/work/'
        >
          Work
        </StyledLink>
      </NavRow>
      <Link to='/'>
        <h5
          css={css`
            color: ${hintTextColor};
            text-align: center;
          `}
        >
          Jamie Woodmancy
        </h5>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  color: ${({ color }) => color};
  padding: 0 ${({ spacing }) => spacing}rem;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  flex: 1;
  padding: ${({ spacing }) => `${spacing}rem 0`};
  text-align: center;
  text-decoration: none;

  &.current-page {
    border-bottom: ${({ bordercolor }) => `2px solid ${bordercolor}`};
  }
`;
