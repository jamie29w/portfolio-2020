import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
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
