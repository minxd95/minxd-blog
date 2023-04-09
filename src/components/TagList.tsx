import { Link } from "gatsby";
import "twin.macro";

interface TagListProps {
  tagList: Array<{ label: string | null; count: number }>;
}

const TagList = ({ tagList }: TagListProps) => {
  return (
    <div tw="w-[240px] flex flex-col ml-6 absolute top-[60px] left-full">
      <span tw="text-[18px] font-bold mb-6">Tags</span>
      <ul tw="flex flex-col gap-3 text-gray-300">
        {tagList.map((tag) => (
          <li key={tag.label}>
            <Link
              to={`/tags?filter=${tag.label}`}
            >{`${tag.label} (${tag.count})`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
