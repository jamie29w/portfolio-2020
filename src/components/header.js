import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link
        className='h3'
        css={css`
          margin-top: 0;
        `}
        to='/'
      >
        Jamie Woodmancy
      </Link>
      <DarkModeSwitch />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  padding: var(--gutter);
  justify-content: space-between;
`;
