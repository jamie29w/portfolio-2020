/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createOpenGraphImage } = require('gatsby-plugin-open-graph-images');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "blog post" } } }
        sort: { fields: frontmatter___published_date, order: DESC }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(`Failed to create posts: `, result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((post, i) => {
    const { slug } = post.frontmatter;
    let prevPost = null,
      nextPost = null;

    if (i >= 1) {
      nextPost = posts[i - 1];
    }
    if (i < posts.length) {
      prevPost = posts[i + 1];
    }

    actions.createPage({
      path: `writing/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/Post.js'),
      context: {
        slug: `${slug}`,
        prevPostSlug: `${prevPost && prevPost.frontmatter.slug}`,
        nextPostSlug: `${nextPost && nextPost.frontmatter.slug}`,
        ogImage: createOpenGraphImage(actions.createPage, {
          path: `og-images/artists/${id}.png`,
          context: { description: 'woodmancy.dev homepage' },
        }),
      },
    });
  });
};
