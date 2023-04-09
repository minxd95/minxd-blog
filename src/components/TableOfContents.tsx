import useScroll from "@/hooks/useScroll";
import useTOC from "@/hooks/useTOC";
import TTableOfContents from "@/types/TTableOfContents";
import { Link } from "gatsby";
import tw from "twin.macro";

interface TableOfContentsProps {
  items: TTableOfContents[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const { scroll } = useScroll();
  const activeId = useTOC(items);

  return (
    <div tw="absolute top-[200px] left-full">
      <div tw="relative">
        <div
          tw="w-[240px] flex flex-col ml-6"
          css={[scroll <= 140 ? tw`absolute` : tw`fixed top-[120px]`]}
        >
          {/* <span tw="text-[18px] font-bold mb-6">Sections</span> */}
          <ul tw="flex flex-col gap-3 text-gray-500">
            {items?.map((item) => (
              <li
                key={item.url}
                css={[
                  item.url.slice(1) === activeId &&
                    tw`text-gray-700 font-medium translate-x-1 transition-toc`,
                ]}
              >
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
