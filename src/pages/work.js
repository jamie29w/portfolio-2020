import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Work = () => (
  <Layout title='Work'>
    <SEO title='Work' />
    <h1>Hi from the work page</h1>
    <p>Welcome to work</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default Work;
