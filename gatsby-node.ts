import { CreatePagesArgs } from "gatsby";
import path from "path";
import kebabCase from "lodash/kebabCase";

exports.createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/tagsTemplate.tsx");

  const result = await graphql<Queries.TagsQuery>(`
    query Tags {
      tagsGroup: allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
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
  const tags = result.data?.tagsGroup.group || [];

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue || "")}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
