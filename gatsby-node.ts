import { CreatePagesArgs } from "gatsby";
import path from "path";
import TPostPageContext from "@/types/TPostPageContext";

exports.createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const result = await graphql<Queries.PostsQuery>(`
    query Posts {
      posts: allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            slug
          }
          internal {
            contentFilePath
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
    if (!post.frontmatter || !post.internal) return;

    const previousPost = idx - 1 >= 0 ? data[idx - 1].frontmatter : null;
    const nextPost = idx < data.length - 1 ? data[idx + 1].frontmatter : null;

    const content = path.resolve(`${post.internal.contentFilePath}`);
    const postTemplate = path.resolve(
      `src/templates/post.tsx?__contentFilePath=${content}`
    );

    const context: TPostPageContext = {
      id: post.id,
      previousPost,
      nextPost,
    };
    createPage({
      path: `/${post.frontmatter.slug}`,
      component: postTemplate,
      context,
    });
  });
};
