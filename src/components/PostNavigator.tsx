import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "gatsby";
import "twin.macro";

const PostNavigator = () => {
  return (
    <div tw="flex justify-between mt-7 mb-14">
      <Link
        to="#"
        tw="w-[258px] h-20 flex justify-start items-center bg-snow rounded-xl px-5 py-3"
      >
        <Icon path={mdiArrowLeft} size="24px" />
        <div tw="flex flex-col items-start ml-[18px] leading-7">
          <span tw="text-[12px]">Previous Post</span>
          <span tw="font-medium">How to use Figma?</span>
        </div>
      </Link>
      <Link
        to="#"
        tw="w-[258px] h-20 flex justify-end items-center bg-snow rounded-xl px-5 py-3"
      >
        <div tw="flex flex-col items-end mr-[18px] leading-7">
          <span tw="text-[12px]">Next Post</span>
          <span tw="font-medium">How to use Figma?</span>
        </div>
        <Icon path={mdiArrowRight} size="24px" />
      </Link>
    </div>
  );
};

export default PostNavigator;
