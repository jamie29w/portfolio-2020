import React from 'react';
import styled from '@emotion/styled';

import { Layout, SectionWrapper, Seo } from '../components';

// import Section from '../components/Section';
// import useWorkContent from '../hooks/useWorkContent';

const pageTitle = 'Recent Work';

const Work = () => {
  // const workSections = useWorkContent();

  return (
    <Layout title='Recent work'>
      <Seo title={pageTitle} />
      <WorkSections>
        {/* todo: figure out how to get components working in MDX files so I can move content/copy out of this file */}

        {/* {workSections.map((section, i) => (
          <Section section={section} key={i} />
        ))} */}

        <SectionWrapper>
          <h3>The First Look Project</h3>
          <p>
            I'm blessed to be married to one of the best photographers in
            Northern Nevada and California. (Not just my opinion--ask The Knot,
            2 years in a row). And I wanted an excuse to dig deeper into Gatsby
            and GraphQL. So I've been working with her and a couple industry
            partners to create a shared page for them:{' '}
            <a
              href='https://www.thefirstlookproject.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              The First Look Project
            </a>
            .
          </p>

          <h5>Partners:</h5>
          <GridList>
            <li>
              <a
                href='https://www.benridpathfilms.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Bed Ridpath Films
              </a>
            </li>
            <li>
              <a
                href='https://www.shesaidyeslaketahoe.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                She Said Yes Weddings
              </a>
            </li>
            <li>
              <a
                href='https://woodmancyphotography.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Woodmancy Photography
              </a>
            </li>
          </GridList>

          <h5>My roles:</h5>
          <GridList>
            <li>UX + UI Design</li>
            <li>Developer</li>
          </GridList>

          <h5>Built with:</h5>
          <GridList>
            <li>React</li>
            <li>Gatsby</li>
            <li>GraphQL</li>
            <li>Emotion</li>
            <li>Netlify</li>
          </GridList>
        </SectionWrapper>

        <SectionWrapper>
          <h3>BeerJS Podcast</h3>
          <p>
            My good friend and mentor,{' '}
            <a
              href='https://davidbeck.co/'
              rel='noopener noreferrer'
              target='_blank'
            >
              David Beck
            </a>{' '}
            and I have the good fortune to live in the same city as BeerJS
            curator, Jordan Papaleo. When we brought up the idea to start a
            podcast where we drink beer and talk JS, Jordan loved it and gave us
            his blessing. We just finished editing our pilot episode and will
            upload it shortly and share a link here.
          </p>

          <h5>My roles:</h5>
          <GridList>
            <li>Co-host</li>
            <li>Front End Developer</li>
          </GridList>
        </SectionWrapper>
      </WorkSections>
    </Layout>
  );
};

export default Work;

const WorkSections = styled.div``;

const GridList = styled.ul`
  display: grid;
  grid-gap: calc(0.5 * var(--spacing));
  grid-template-columns: 1fr 1fr;
  margin-top: var(--spacing);

  & > li {
    margin-top: calc(0.5var (--spacing));
  }

  @media (min-width: 62em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
