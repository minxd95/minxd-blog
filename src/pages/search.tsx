import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import "twin.macro";

const SearchPage = () => {
  return (
    <Layout>
      <div tw="w-full h-[calc(100vh - 120px)] flex justify-center items-center text-4xl font-bold text-center leading-[72px]">
        🙏
        <br />
        준비중입니다.
      </div>
    </Layout>
  );
};

export const Head = () => <SEO title={"포스트 검색"} />;

export default SearchPage;
