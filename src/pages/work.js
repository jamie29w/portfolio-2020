import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const pageTitle = 'Work';

const Work = () => (
  <Layout title={pageTitle}>
    <SEO title={pageTitle} />
    <h3>Hi from the work page</h3>
  </Layout>
);

export default Work;
