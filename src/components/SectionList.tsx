import useScroll from "@/hooks/useScroll";
import TableOfContents from "@/types/TableOfContents";
import { Link } from "gatsby";
import tw from "twin.macro";

interface SectionListProps {
  items: TableOfContents;
}

const SectionList = ({ items }: SectionListProps) => {
  const { scroll } = useScroll();

  return (
    <div tw="absolute top-[180px] left-full">
      <div tw="relative">
        <div
          tw="w-[240px] flex flex-col ml-6"
          css={[scroll <= 120 ? tw`absolute` : tw`fixed top-[120px]`]}
        >
          <span tw="text-[18px] font-bold mb-6">Sections</span>
          <ul tw="flex flex-col gap-3 text-darkGrey">
            {items?.map((item) => (
              <li>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
