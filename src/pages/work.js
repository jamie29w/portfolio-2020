import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Work = () => (
  <Layout>
    <SEO title='Work' />
    <h1>Hi from the work page</h1>
    <p>Welcome to work</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default Work;
