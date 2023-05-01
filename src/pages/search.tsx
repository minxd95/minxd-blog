import Layout from "@/components/Layout";
import PostListItem from "@/components/PostListItem";
import SEO from "@/components/SEO";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { graphql, PageProps } from "gatsby";
import {
  ChangeEventHandler,
  FocusEventHandler,
  useEffect,
  useState,
} from "react";
import "twin.macro";
import tw from "twin.macro";

const SearchPage = ({ data }: PageProps<Queries.SearchPageQuery>) => {
  const [isFocused, setIsFocused] = useState(false);
  const [filter, setFilter] = useState("");

  const {
    allMdx: { nodes: posts },
  } = data;

  const [filteredList, setFilteredList] = useState(posts);

  const handleFocus: FocusEventHandler<HTMLInputElement> = () =>
    setIsFocused(true);
  const handleBlur: FocusEventHandler<HTMLInputElement> = () =>
    setIsFocused(false);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFilter(e.target.value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFilteredList(
        posts.filter((post) => {
          const lowerCaseFilter = filter.toLowerCase();
          const lowerCaseBody = post.body?.toLowerCase() || "";
          const lowerCaseTitle = post.frontmatter?.title?.toLowerCase() || "";
          if (lowerCaseTitle.includes(lowerCaseFilter)) return true;
          else if (lowerCaseBody.includes(lowerCaseFilter)) return true;
          else return false;
        })
      );
    }, 250);

    return () => clearTimeout(debounce);
  }, [filter]);

  return (
    <Layout>
      <div tw="py-12">
        {/* title */}
        <span tw="text-2xl font-bold">
          {`${filter ? `"${filter}" 이(가) 포함된 ` : `총`}`}{" "}
          {filteredList.length}개의 포스트
        </span>
      </div>
      <div tw="h-12 flex justify-center items-center relative">
        <Icon
          path={mdiMagnify}
          size="24px"
          tw="absolute left-5 transition-all"
          css={[isFocused ? tw`text-gray-400` : tw`text-gray-300`]}
        />
        <input
          type="text"
          tw="w-full h-full px-14 border border-solid rounded-xl focus:outline-0 transition-all"
          css={[
            isFocused
              ? tw`border-gray-400 placeholder-gray-400`
              : tw`border-gray-300 placeholder-gray-300`,
          ]}
          value={filter}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="검색어 입력"
        />
      </div>
      <div tw="flex flex-wrap gap-x-2.5 gap-y-2">{/* search bar */}</div>
      <ul tw="mb-20">
        {filteredList.map((post) => (
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
  query SearchPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY년 M월 DD일")
          author
          slug
          tags
        }
        body
        excerpt
      }
    }
  }
`;

export const Head = () => <SEO title={"태그 모음"} />;

export default SearchPage;
