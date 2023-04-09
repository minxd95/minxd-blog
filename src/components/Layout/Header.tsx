import { mdiGithub, mdiInstagram, mdiMagnify, mdiTagOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import tw from "twin.macro";

interface HeaderProps {
  isMain: boolean;
}

const Header = ({ isMain }: HeaderProps) => {
  return (
    <header
      css={[
        tw`flex flex-col bg-gray-50`,
        isMain ? tw`h-[260px]` : tw`h-[60px]`,
      ]}
    >
      <nav tw="h-[60px] px-20 flex justify-between items-center">
        <Link tw="text-2xl font-extrabold" to="/">
          Seom.in
        </Link>
        <div tw="flex gap-4 text-gray-500">
          <Link to="/tags">
            <Icon path={mdiTagOutline} size="24px" />
          </Link>
          <Link to="/search">
            <Icon path={mdiMagnify} size="24px" />
          </Link>
        </div>
      </nav>
      {isMain && (
        <div tw="h-[200px] mx-auto">
          <div tw="w-[768px] h-full px-6 flex items-center">
            <div tw="w-[123px] h-[123px] mr-8 rounded-full overflow-hidden isolate">
              <StaticImage src={"../../images/me.jpeg"} alt="me" />
            </div>
            <div tw="flex flex-col">
              <span tw="text-2xl font-extrabold mb-2">Minseok Seo</span>
              <span tw="font-medium text-gray-500 mb-4">
                안녕하세요. 성장하는 개발자 서민석입니다.
              </span>
              <div tw="flex gap-2 text-gray-500">
                <a href="https://www.instagram.com/smin_stone_" target="_blank">
                  <Icon path={mdiInstagram} size="24px" />
                </a>
                <a href="https://github.com/minxd95" target="_blank">
                  <Icon path={mdiGithub} size="24px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
