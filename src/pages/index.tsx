import Layout from "@/components/Layout";
import PostListItem from "@/components/PostListItem";
import SectionList from "@/components/SectionList";
import TagList from "@/components/TagList";
import "twin.macro";

const IndexPage = () => {
  return (
    <Layout isMain>
      <TagList />
      {/* <SectionList /> */}
      <ul>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
