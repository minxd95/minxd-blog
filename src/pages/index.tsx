import Layout from "@/components/Layout";
import { css } from "@emotion/react";
import "twin.macro";

const IndexPage = () => {
  return (
    <Layout>
      <span
        tw="text-yellow-300"
        css={css`
          font-size: 100px;
        `}
      >
        asd
      </span>
      <div tw="shadow-2xl w-20 h-20"></div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
