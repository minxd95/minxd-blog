import Tag from "@/components/Tag";
import { Link } from "gatsby";
import "twin.macro";

interface PostListItemProps {
  title: string | null | undefined;
  date: string | null | undefined;
  author: string | null | undefined;
  slug: string | null | undefined;
  excerpt: string | null | undefined;
  tags?: Array<string | null>;
}

const PostListItem = ({
  title = "",
  date = "",
  author = "",
  slug = "",
  excerpt = "",
  tags = [],
}: PostListItemProps) => {
  return (
    <li tw="flex flex-col border-t border-solid border-gray-200 first-of-type:border-t-0">
      <Link to={`/${slug}`} tw="mt-12 flex flex-col">
        <span tw="text-[32px] font-bold">{title}</span>
        <div tw="my-4 text-[14px]">
          <span tw="font-medium">{author}</span>
          <span tw="text-gray-500">&nbsp;· {date}</span>
        </div>
        <span>{excerpt}</span>
      </Link>
      <div tw="h-9 flex my-10 gap-2.5">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </li>
  );
};

export default PostListItem;
