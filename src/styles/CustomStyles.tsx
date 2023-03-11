import React from "react";
import { Global, css } from "@emotion/react";
import tw from "twin.macro";

const customStyles = css`
  /* font settings */
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  body {
    font-family: Pretendard;
    ${tw`text-charcoal`}
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
