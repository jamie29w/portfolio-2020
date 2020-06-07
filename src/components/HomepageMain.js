import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from './DarkModeSwitch';
import Footer from './Footer';

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
        <p>Balanced form and function</p>
        <p>[Under construction]</p>
      </AboutBlock>
      <CtaWrapper>
        <Link className='btn' to='/work/'>
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
  padding: var(--gutterHorizontal);
  position: relative;
`;

const NameWrapper = styled.div`
  align-items: flex-start;
  grid-area: nameWrapper;

  & > h2 {
    margin-top: 0;
  }

  @media (min-width: 48em) {
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
  align-items: center;
  position: absolute;
  right: calc(0.5em + var(--gutterHorizontal));
  top: calc(0.5em + var(--gutterHorizontal));
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: titleBlock;
  justify-content: flex-end;

  & > h1 {
    margin-top: 0;
  }

  @media (min-width: 48em) {
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

  @media (min-width: 48em) {
    align-items: center;
  }
`;

const CtaWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-area: cta;
  justify-content: center;

  & > a {
    display: flex;
    border: 2px solid var(--primary);
    flex: 1;
    justify-content: center;
    margin-top: 0;
    padding: calc(0.25 * var(--spacing)) 0;
    transition: background-size 0.2s ease-in, border 0.2s ease-in;

    &:before {
      background: transparent;
      height: 100%;
      border-top: 2px solid var(--secondary);
      border-bottom: 2px solid var(--secondary);
    }
    &:after {
      background: transparent;
      bottom: 0;
      content: '';
      left: 0;
      height: 100%;
      border-left: 2px solid var(--secondary);
      border-right: 2px solid var(--secondary);
      position: absolute;
      transform: scaleY(0);
      transition: all 0.2s ease-in;
      width: 100%;
    }

    &:focus,
    &:hover {
      background-size: 100% 100%;
      border: 2px solid transparent;
      transition: background-size 0.2s ease-out, border 0.2s ease-out;

      &:after {
        transform: scaleY(1);
        transition: all 0.2s ease-out;
      }
    }

    @media (min-width: 48em) {
      max-width: 200px;
    }
  }
`;
