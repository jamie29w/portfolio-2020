import React, { useContext } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';
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
      <NavRow2 spacing={spacing}>
        <Link
          css={css`
            margin-top: 0;
          `}
          to='/'
        >
          <h5
            css={css`
              margin-top: 0;
              text-align: center;
            `}
          >
            Jamie Woodmancy
          </h5>
        </Link>
        <DarkModeSwitch />
      </NavRow2>
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

const NavRow2 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${({ spacing }) => `${spacing}rem ${spacing * 2}rem 0`};
`;

const StyledLink = styled(Link)`
  flex: 1;
  padding: ${({ spacing }) => `${spacing}rem 0`};
  text-align: center;
  text-decoration: none;

  &.current-page {
    border-bottom: ${({ bordercolor }) => `2px solid ${bordercolor}`};
    font-weight: 700;
  }
`;
