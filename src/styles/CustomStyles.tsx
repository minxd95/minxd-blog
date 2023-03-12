import React from "react";
import { Global, css } from "@emotion/react";
import tw from "twin.macro";

const customStyles = css`
  /* font settings */
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

  body {
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${tw`text-charcoal`}
  }

  .markdown-body ol,
  .markdown-body ul {
    list-style: revert;
  }
`;

const CustomStyles = () => {
  return (
    <>
      <Global styles={customStyles} />
    </>
  );
};

export default CustomStyles;
