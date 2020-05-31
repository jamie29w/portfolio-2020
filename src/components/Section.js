import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SectionWrapper from './SectionWrapper';

const Section = ({ section: { body } }) => {
  return (
    <SectionWrapper>
      <MDXRenderer>{body}</MDXRenderer>
    </SectionWrapper>
  );
};

export default Section;
