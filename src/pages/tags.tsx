import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Tag from "@/components/Tag";
import { graphql, Link, PageProps } from "gatsby";
import kebabCase from "lodash/kebabCase";
import "twin.macro";

const TagsPage = ({ data }: PageProps<Queries.TagsPageQuery>) => {
  const totalTagCount = data.allMdx.group.reduce(
    (sum, current) => sum + current.totalCount,
    0
  );
  const tags = data.allMdx.group.map((tag) => tag.fieldValue);
  return (
    <Layout>
      <div tw="flex flex-col py-12">
        {/* title */}
        <span tw="text-[32px] font-bold">총 {totalTagCount}개의 태그</span>
      </div>
      <div tw="flex flex-wrap gap-x-2.5 gap-y-2">
        {tags.map((tag) => (
          <Link to={`/tags/${kebabCase(tag || "")}`}>
            <Tag text={tag || ""} />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TagsPage {
    allMdx {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => <SEO title={"태그 모음"} />;

export default TagsPage;
