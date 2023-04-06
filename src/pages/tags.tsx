import Layout from "@/components/Layout";
import PostListItem from "@/components/PostListItem";
import SEO from "@/components/SEO";
import Tag from "@/components/Tag";
import { graphql, Link, PageProps } from "gatsby";
import queryString from "query-string";
import "twin.macro";

const TagsPage = ({ data }: PageProps<Queries.TagsPageQuery>) => {
  let selectedTag = "";
  if (typeof document !== "undefined") {
    selectedTag = queryString.parse(location.search).filter as string;
  }

  const totalTagCount = data.tags.group.reduce(
    (sum, current) => sum + current.totalCount,
    0
  );
  const {
    posts: { nodes: posts },
    tags,
  } = data;

  return (
    <Layout>
      <div tw="py-12">
        {/* title */}
        <span tw="text-2xl font-bold">총 {totalTagCount}개의 태그</span>
      </div>
      <div tw="h-12 flex items-center flex-wrap gap-x-2.5 gap-y-2">
        {tags.group.map((tag) => (
          <Link key={tag.fieldValue} to={`/tags?filter=${tag.fieldValue}`}>
            <Tag
              text={tag.fieldValue}
              isActive={tag.fieldValue === selectedTag}
              count={tag.totalCount}
            />
          </Link>
        ))}
      </div>
      <ul tw="mb-20">
        {posts
          .filter((post) =>
            selectedTag ? post.frontmatter?.tags?.includes(selectedTag) : true
          )
          .map((post) => (
            <PostListItem
              key={post.id}
              title={post.frontmatter?.title}
              date={post.frontmatter?.date}
              author={post.frontmatter?.author}
              slug={post.frontmatter?.slug}
              excerpt={post.excerpt}
              tags={[...(post.frontmatter?.tags || [])]}
            />
          ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query TagsPage {
    tags: allMdx {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
    posts: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { ne: null } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY년 M월 DD일")
          author
          slug
          tags
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <SEO title={"태그 모음"} />;

export default TagsPage;
