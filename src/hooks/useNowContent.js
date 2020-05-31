import { graphql, useStaticQuery } from 'gatsby';

const useNowContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "now" } } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        nodes {
          body
          frontmatter {
            title
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useNowContent;
