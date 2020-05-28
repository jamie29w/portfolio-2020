import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

const HomepageContent = () => {
  return (
    <HomepageContentWrapper>
      <div>
        <HeadlineRow>
          <h2>Jamie</h2>
          <SwitchWrapper>
            <DarkModeSwitch />
          </SwitchWrapper>
        </HeadlineRow>
        <h2
          css={css`
            margin-top: 0;
          `}
        >
          Woodmancy
        </h2>
        <TitleText>Front</TitleText>
        <TitleText>End</TitleText>
        <TitleText>Engineer</TitleText>
      </div>
      <HomePageLink className='btn' to='/writing/'>
        See my work
      </HomePageLink>
    </HomepageContentWrapper>
  );
};

export default HomepageContent;

const HomepageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 55px);
  justify-content: space-between;
  padding: var(--spacing);
`;

const HeadlineRow = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
`;

const SwitchWrapper = styled.div`
  margin-top: var(--spacing);
`;

const TitleText = styled.h1`
  margin-top: 0;

  &:first-of-type {
    margin-top: calc(4 * var(--spacing));
  }
`;

const HomePageLink = styled(Link)`
  align-items: center;
  display: flex;
  border: 2px solid var(--primary);
  color: var(--primary);
  flex-direction: column;
  font-weight: 600;
  height: 68px;
  justify-content: center;
  margin-bottom: calc(3 * var(--spacing));
  text-align: center;
  width: 100%;

  &:active,
  &:hover {
    border: 2px solid var(--primaryHover);
    color: var(--primaryHover);
  }
`;
