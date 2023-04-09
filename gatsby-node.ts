import { CreatePagesArgs } from "gatsby";
import path from "path";
import kebabCase from "lodash/kebabCase";

exports.createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/templates/post.tsx");

  const result = await graphql<Queries.PostsQuery>(`
    query Posts {
      posts: allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Extract tag data from query
  const posts = result.data?.posts.nodes || [];

  // Make tag pages
  posts.forEach((post, idx, data) => {
    const previousPost = idx - 1 >= 0 ? data[idx - 1] : null;
    const nextPost = idx < data.length - 1 ? data[idx + 1] : null;

    createPage({
      path: `/${post.frontmatter?.slug}`,
      component: postTemplate,
      context: {
        previousPost,
        nextPost,
      },
    });
  });
};
