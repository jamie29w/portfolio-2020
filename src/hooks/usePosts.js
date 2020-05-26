import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "blog post" } } }
        sort: { order: DESC, fields: frontmatter___published_date }
      ) {
        nodes {
          frontmatter {
            title
            author
            slug
            published_date
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    author: post.frontmatter.author,
    excerpt: post.excerpt,
    published_date: post.frontmatter.published_date,
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
  }));
};

export default usePosts;
