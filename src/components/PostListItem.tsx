import { Link } from "gatsby";
import "twin.macro";

interface PostListItemProps {
  title: string;
  date: string;
  author: string;
  slug: string;
  excerpt: string;
}

const PostListItem = ({
  title,
  date,
  author,
  slug,
  excerpt,
}: PostListItemProps) => {
  return (
    <li tw="flex flex-col border-t border-solid border-lineGrey first-of-type:border-t-0">
      <Link to={`/${slug}`} tw="mt-12 flex flex-col">
        <span tw="text-[32px] font-bold">{title}</span>
        <div tw="my-4 text-[14px]">
          <span tw="font-medium">{author}</span>
          <span tw="text-darkGrey">&nbsp;· {date}</span>
        </div>
        <span>{excerpt}</span>
      </Link>
      <div tw="h-9 flex my-10 gap-2.5">
        <span tw="flex justify-center items-center px-4 py-2 rounded-full bg-snow">
          design
        </span>
        <span tw="flex justify-center items-center px-4 py-2 rounded-full bg-snow">
          lorem
        </span>
        <span tw="flex justify-center items-center px-4 py-2 rounded-full bg-snow">
          ipsum
        </span>
      </div>
    </li>
  );
};

export default PostListItem;
