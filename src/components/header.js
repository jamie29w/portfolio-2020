import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { ThemeContext, css } from '@emotion/core';

const Header = () => {
  const { colors, padding, text } = useContext(ThemeContext);

  return (
    <HeaderWrapper colors={colors}>
      <Row1 padding={padding}>
        <StyledLink
          activeClassName='current-page'
          colors={colors}
          padding={padding}
          text={text}
          to='/writing/'
        >
          Writing
        </StyledLink>
        <StyledLink
          activeClassName='current-page'
          colors={colors}
          padding={padding}
          text={text}
          to='/now/'
        >
          Now
        </StyledLink>
        <StyledLink
          activeClassName='current-page'
          colors={colors}
          padding={padding}
          text={text}
          to='/work/'
        >
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

const HeaderWrapper = styled.header`
  background: ${({ colors }) => colors.background};
  color: ${({ colors }) => colors.primary};
  margin-bottom: ${({ padding }) => padding};
`;

const Row1 = styled.div`
  margin: 0 auto;
  padding: ${({ padding }) => `0 0 ${padding}`};
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  flex: 1;
  text-align: center;
  padding: ${({ padding }) => `${padding} 0`};
  font-size: ${({ text }) => text.bodyFontSize};
  text-decoration: none;

  &.current-page {
    border-bottom: ${({ colors }) => `2px solid ${colors.accentLight}`};
  }
`;
