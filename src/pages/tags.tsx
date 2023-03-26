import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "gatsby";
import "twin.macro";

const TagsPage = () => {
  return (
    <Layout>
      <div tw="w-full h-[calc(100vh - 120px)] flex flex-col justify-center items-center">
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_iYvSqSMKZB.json"
          tw="w-[300px] h-[300px]"
        />
        <span tw="text-2xl font-medium text-center">
          sry, I'm developing this page :(
        </span>
        <Link tw="mt-6" to="/">
          go to main 👈
        </Link>
      </div>
    </Layout>
  );
};

export const Head = () => <SEO title={"태그 모음"} />;

export default TagsPage;
