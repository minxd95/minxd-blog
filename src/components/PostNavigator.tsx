import React from "react";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "gatsby";
import "twin.macro";

interface PostNavigatorProps {
  previousPost: {
    slug: string | null;
    title: string | null;
  } | null;
  nextPost: {
    slug: string | null;
    title: string | null;
  } | null;
}

const PostNavigator = ({ previousPost, nextPost }: PostNavigatorProps) => {
  if (!previousPost && !nextPost) return <></>;
  return (
    <div tw="flex justify-between mt-7 mb-14">
      {previousPost ? (
        <Link
          to={`/${previousPost.slug}`}
          tw="w-[258px] h-20 flex justify-start items-center bg-gray-50 rounded-xl px-5 py-3"
        >
          <Icon path={mdiArrowLeft} size="24px" />
          <div tw="flex flex-col items-start ml-[18px] leading-7">
            <span tw="text-[12px]">Previous Post</span>
            <span tw="font-medium">{previousPost.title}</span>
          </div>
        </Link>
      ) : (
        <div></div>
      )}
      {nextPost ? (
        <Link
          to={`/${nextPost.slug}`}
          tw="w-[258px] h-20 flex justify-end items-center bg-gray-50 rounded-xl px-5 py-3"
        >
          <div tw="flex flex-col items-end mr-[18px] leading-7">
            <span tw="text-[12px]">Next Post</span>
            <span tw="font-medium">{nextPost.title}</span>
          </div>
          <Icon path={mdiArrowRight} size="24px" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PostNavigator;
