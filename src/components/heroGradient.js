import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';

const HomepageMain = () => {
  return (
    <HomepageMainWrapper>
      <NameWrapper>
        <h2>Jamie</h2>
        <h2>Woodmancy</h2>
      </NameWrapper>
      <DarkModeSwitchWrapper>
        <DarkModeSwitch />
      </DarkModeSwitchWrapper>
      <Main>
        <h1>Front</h1>
        <h1>End</h1>
        <h1>Engineer</h1>
      </Main>
      <CtaWrapper>
        <Link className='btn' to='/writing/'>
          See my work
        </Link>
      </CtaWrapper>
    </HomepageMainWrapper>
  );
};

export default HomepageMain;

const HomepageMainWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'nameWrapper darkModeSwitch'
    'main main'
    'cta cta';
  grid-template-columns: 1fr 30px;
  grid-template-rows: auto 1fr auto;
  min-height: calc(100vh - 55px);
  padding: var(--spacing);
`;

const NameWrapper = styled.div`
  align-items: flex-start;
  grid-area: nameWrapper;

  & > h2 {
    margin-top: 0;
  }
`;

const DarkModeSwitchWrapper = styled.div`
  align-items: flex-start;
  grid-area: darkModeSwitch;
`;

const Main = styled.main`
  grid-area: main;

  & > h1 {
    margin-top: 0;

    &:first-of-type {
      margin-top: calc(4 * var(--spacing));
    }
  }
`;

const CtaWrapper = styled.div`
  align-items: flex-end;
  grid-area: cta;

  & > a {
    align-items: center;
    display: flex;
    border: 2px solid var(--primary);
    color: var(--primary);
    grid-area: cta;
    flex-direction: column;
    font-weight: 600;
    height: 68px;
    justify-content: center;
    margin-top: 0;
    text-align: center;
    width: 100%;

    &:active,
    &:hover {
      border: 2px solid var(--primaryHover);
      color: var(--primaryHover);
    }
  }
`;
