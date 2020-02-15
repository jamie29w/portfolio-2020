import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '@emotion/core';

const Footer = () => {
  const { colors, text, padding } = useContext(ThemeContext);

  const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${padding};
    font-size: ${text.bodyFontSize};
    height: ${`${17 * 3}px`};
    color: ${colors.primary};
  `;

  return (
    <StyledFooter>
      <span>
        © {new Date().getFullYear()}, Built with
        {`  `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </span>
    </StyledFooter>
  );
};

export default Footer;
