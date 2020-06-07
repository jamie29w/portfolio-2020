import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import DarkModeSwitch from './DarkModeSwitch';
import Footer from './Footer';
import HeaderNavLink from './HeaderNavLink';

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
      <MainLinkWrapper>
        <MainLink to='/work/'>See my work</MainLink>
      </MainLinkWrapper>
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
    'mainLink'
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

const MainLink = styled(HeaderNavLink)`
  border: 2px solid var(--primary);
`;

const MainLinkWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-area: mainLink;
  justify-content: center;
`;
