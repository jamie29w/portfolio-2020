import React, { useContext } from 'react';
import { css, ThemeContext } from '@emotion/core';
import styled from '@emotion/styled';

import gatsbyIcon from '../../images/gatsby-icon.png';
import netlifyIcon from '../../images/netlify-icon.png';
import reactIcon from '../../images/react-icon.png';

const Footer = () => {
  const { colors, text, padding } = useContext(ThemeContext);

  return (
    <StyledFooter colors={colors} padding={padding} text={text}>
      <Row1>
        <span>© {new Date().getFullYear()}, Big thanks to</span>
        {footerIcons.map(icon => {
          return (
            <a
              href={icon.href}
              target='_blank'
              rel='noopener noreferrer'
              key={icon.alt}
            >
              <img
                css={css`
                  height: 20px;
                `}
                src={icon.src}
                alt={icon.alt}
              />
            </a>
          );
        })}
      </Row1>
    </StyledFooter>
  );
};

export default Footer;

const Row1 = styled.span`
  display: flex;
  align-items: center;

  & > a {
    padding: 0;
  }

  & > * :not(:last-child) {
    margin-right: 5px;
  }
`;

const StyledFooter = styled.footer`
  align-items: center;
  color: ${({ colors }) => colors.bodyText};
  display: flex;
  font-size: ${({ text }) => text.bodyFontSize};
  height: ${({ text }) => `${text.bodyFontSizeNum * 3}px`};
  justify-content: center;
  justify-self: flex-end;
  padding: ${({ padding }) => `${padding} ${padding} 0`};
`;

const footerIcons = [
  {
    href: 'https://www.reactjs.org',
    src: reactIcon,
    alt: 'link to react homepage',
  },
  {
    href: 'https://www.gatsbyjs.org',
    src: gatsbyIcon,
    alt: 'link to gatsby homepage',
  },
  {
    href: 'https://www.netlify.com',
    src: netlifyIcon,
    alt: 'link to netlify homepage',
  },
];
