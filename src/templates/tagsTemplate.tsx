import Layout from "@/components/Layout";
import PostListItem from "@/components/PostListItem";
import SEO from "@/components/SEO";
import { graphql, HeadProps, PageProps } from "gatsby";
import "twin.macro";

const TagsTemplate = ({
  data,
  pageContext,
}: PageProps<
  Queries.TagsTemplateQuery,
  Queries.TagsTemplateQueryVariables
>) => {
  return (
    <Layout>
      {/* <div tw="flex flex-col py-12">
        <span tw="text-[32px] font-bold">{pageContext.tag}</span>
      </div> */}
      <ul tw="mb-20">
        {data.allMdx.nodes.map((post) => (
          <PostListItem
            key={post.id}
            title={post.frontmatter?.title || ""}
            date={post.frontmatter?.date || ""}
            author={post.frontmatter?.author || ""}
            slug={post.frontmatter?.slug || ""}
            excerpt={post.excerpt || ""}
          />
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query TagsTemplate($tag: String) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY년 M월 DD일")
          author
          slug
        }
        excerpt
      }
    }
  }
`;

export const Head = ({
  pageContext,
}: HeadProps<
  Queries.TagsTemplateQuery,
  Queries.TagsTemplateQueryVariables
>) => <SEO title={pageContext.tag || ""} />;

export default TagsTemplate;
