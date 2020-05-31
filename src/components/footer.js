import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import gatsbyIcon from '../../images/gatsby-icon.png';
import netlifyIcon from '../../images/netlify-icon.png';
import reactIcon from '../../images/react-icon.png';

const Footer = props => {
  return (
    <StyledFooter {...props}>
      <span className='caption'>
        Woodmancy Dev™ {new Date().getFullYear()}, built with
      </span>
      <IconSpan>
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
      </IconSpan>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: var(--spacing);
`;

const IconSpan = styled.span`
  align-items: center;
  display: flex;
  margin-left: calc(var(--spacing) / 4);

  & > a {
    margin-top: 0;
  }

  & > * :not(:last-child) {
    margin-right: 5px;
  }
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
