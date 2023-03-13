import Layout from "@/components/Layout";
import PostListItem from "@/components/PostListItem";
import SEO from "@/components/SEO";
import TagList from "@/components/TagList";
import { graphql, PageProps } from "gatsby";
import "twin.macro";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <Layout isMain>
      <TagList />
      <ul>
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
  query IndexPage {
    allMdx {
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

export const Head = () => <SEO title="메인" />;

export default IndexPage;
