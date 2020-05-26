import { graphql, useStaticQuery } from 'gatsby';

const useWorkContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "work" } } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        nodes {
          body
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useWorkContent;
