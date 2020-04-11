import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css, ThemeContext } from '@emotion/core';

const gatsbyIcon = require('../../images/gatsby-icon.png');
const netlifyIcon = require('../../images/netlify-icon.png');
const reactIcon = require('../../images/react-icon.png');

const Footer = () => {
  const { colors, text, padding } = useContext(ThemeContext);

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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${padding} ${padding} 0;
    font-size: ${text.bodyFontSize};
    height: ${`${text.bodyFontSizeNum * 3}px`};
    color: ${colors.bodyText};
  `;

  return (
    <StyledFooter>
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
