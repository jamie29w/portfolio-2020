import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';
import Footer from './footer';

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
      <TitleBlock>
        <h1>Front</h1>
        <h1>End</h1>
        <h1>Engineer</h1>
      </TitleBlock>
      <AboutBlock>
        <p>Balanced feeling and function</p>
      </AboutBlock>
      <CtaWrapper>
        <Link className='btn' to='/writing/'>
          See my work
        </Link>
      </CtaWrapper>
      <Footer
        css={css`
          grid-area: footer;
        `}
      />
    </HomepageMainWrapper>
  );
};

export default HomepageMain;

const HomepageMainWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'nameWrapper'
    'titleBlock'
    'aboutBlock'
    'cta'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1.5fr 1fr 1fr auto;
  min-height: 100vh;
  padding: var(--gutter);
  position: relative;
`;

const NameWrapper = styled.div`
  align-items: flex-start;
  grid-area: nameWrapper;

  & > h2 {
    margin-top: 0;
  }

  @media (min-width: 42em) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    & > h2 {
      margin-left: calc(var(--spacing) / 2);
    }
  }
`;

const DarkModeSwitchWrapper = styled.div`
  align-items: flex-start;
  position: absolute;
  right: var(--gutter);
  top: var(--gutter);
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: titleBlock;
  justify-content: flex-end;

  & > h1 {
    margin-top: 0;
  }

  @media (min-width: 42em) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;

    & > h1:not(:first-of-type) {
      margin-left: calc(var(--spacing) / 2);
    }
  }
`;

const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: aboutBlock;
  margin-top: var(--spacing);
  justify-content: flex-start;

  & > p {
    margin-top: 0;
  }

  @media (min-width: 42em) {
    align-items: center;
  }
`;

const CtaWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  grid-area: cta;

  @media (min-width: 42em) {
    justify-content: center;
  }

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

    @media (min-width: 42em) {
      max-width: 200px;
    }

    &:active,
    &:hover {
      border: 2px solid var(--primaryHover);
      color: var(--primaryHover);
    }
  }
`;
