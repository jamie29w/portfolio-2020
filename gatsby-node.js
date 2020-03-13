/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
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
    let prevPost = null, nextPost = null;

    if (i >= 1) {
      prevPost = posts[i - 1]
    }
    if (i < posts.length) {
      nextPost = posts[i + 1]
    }

    actions.createPage({
      path: `writing/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: `${slug}`,
        prevPostSlug: `${prevPost.frontmatter.slug}`,
        nextPostSlug: `${nextPost.frontmatter.slug}`,
      },
    });
  });
};