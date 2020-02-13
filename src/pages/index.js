import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';

import Hero from '../components/hero';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Gradient from '../components/gradient';

const IndexPage = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Hero />
      <Layout>
        <SEO title='Home' />
        <h1 style={{ color: colors.primary }}>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
