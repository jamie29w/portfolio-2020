import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';
import { Link } from 'gatsby';

const Header = () => {
  const {
    colors: { accentLight, accentMid, primary },
    spacing,
  } = useContext(ThemeContext);

  return (
    <HeaderWrapper color={primary} spacing={spacing}>
      <NavRow spacing={spacing}>
        <StyledLink
          activeClassName='current-page'
          borderColor={accentLight}
          spacing={spacing}
          to='/writing/'
        >
          Writing
        </StyledLink>
        <StyledLink
          activeClassName='current-page'
          borderColor={accentLight}
          spacing={spacing}
          to='/now/'
        >
          Now
        </StyledLink>
        <StyledLink
          activeClassName='current-page'
          borderColor={accentLight}
          spacing={spacing}
          to='/work/'
        >
          Work
        </StyledLink>
      </NavRow>
      <Link to='/'>
        <h5
          css={css`
            color: ${accentMid};
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
    border-bottom: ${({ borderColor }) => `2px solid ${borderColor}`};
  }
`;
