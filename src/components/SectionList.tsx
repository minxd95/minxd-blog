import { useState, useEffect } from "react";
import tw from "twin.macro";

const SectionList = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <div tw="absolute top-[60px] left-full">
      <div tw="relative">
        <div
          tw="w-[240px] flex flex-col ml-6"
          css={[scrollY <= 260 ? tw`absolute` : tw`fixed top-[60px]`]}
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
