import useScroll from "@/hooks/useScroll";
import tw from "twin.macro";

const SectionList = () => {
  const { scroll } = useScroll();

  return (
    <div tw="absolute top-[60px] left-full">
      <div tw="relative">
        <div
          tw="w-[240px] flex flex-col ml-6"
          css={[scroll <= 60 ? tw`absolute` : tw`fixed top-[60px]`]}
        >
          <span tw="text-[18px] font-bold mb-6">Sections</span>
          <ul tw="flex flex-col gap-3 text-darkGrey">
            <li>1. 시작</li>
            <li>2. 중간</li>
            <li>3. 결론</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
