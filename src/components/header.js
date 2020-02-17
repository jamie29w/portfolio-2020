import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';

const Header = () => {
  const { colors, padding, text } = useContext(ThemeContext);

  const HeaderWrapper = styled.header`
    background: ${colors.backgroun};
    color: ${colors.primary};
    margin-bottom: ${padding};
  `;

  const Row1 = styled.div`
    margin: 0 auto;
    padding: ${padding};
    display: flex;
    justify-content: space-between;
  `;

  const StyledLink = styled(Link)`
    padding: ${padding};
    font-size: ${text.bodyFontSize};
    text-decoration: none;

    &.current-page {
      border-bottom: 2px solid ${colors.primary};
    }
  `;

  return (
    <HeaderWrapper>
      <Row1>
        <StyledLink activeClassName='current-page' to='/writing/'>
          Writing
        </StyledLink>
        <StyledLink activeClassName='current-page' to='/about/'>
          About
        </StyledLink>
        <StyledLink activeClassName='current-page' to='/work/'>
          Work
        </StyledLink>
      </Row1>
      <h3
        css={css`
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
