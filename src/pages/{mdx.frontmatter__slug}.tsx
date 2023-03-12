import Layout from "@/components/Layout";
import SectionList from "@/components/SectionList";
import SEO from "@/components/SEO";
import { mdiInstagram, mdiGithub, mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import { graphql, HeadProps, Link, PageProps } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import "twin.macro";
import "github-markdown-css";

const PostDetailPage = ({
  data,
  children,
}: PageProps<Queries.PostDetailPageQuery>) => {
  return (
    <Layout>
      <SectionList />
      <div tw="flex flex-col py-12">
        {/* title */}
        <div>
          <span tw="text-[32px] font-bold">{data.mdx?.frontmatter?.title}</span>
          <div tw="text-[14px] flex mt-6">
            <span tw="font-bold">{data.mdx?.frontmatter?.author}</span>
            <span tw="text-darkGrey">
              &nbsp;· {data.mdx?.frontmatter?.date}
            </span>
          </div>
          <div tw="h-9 flex my-6 gap-2.5">
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
        </div>
        {/* contents */}
        <div tw="pt-8 pb-[74px] border-t border-solid border-lineGrey">
          <div tw="mb-8">
            <GatsbyImage
              image={
                getImage(
                  data.mdx?.frontmatter?.image?.childImageSharp as ImageDataLike
                ) as IGatsbyImageData
              }
              alt={data.mdx?.frontmatter?.image_alt || ""}
            />
          </div>
          <div className="markdown-body">{children}</div>
        </div>
        {/* profile */}
        <div tw="h-[200px]">
          <div tw="w-[768px] h-full flex items-center">
            <div tw="w-[123px] h-[123px] mr-8 rounded-full overflow-hidden">
              <StaticImage
                src={"../images/me.jpeg"}
                alt="me"
                width={400}
                height={400}
                layout="fixed"
                style={{
                  transform: "translate(-144px, -150px)",
                }}
              />
            </div>
            <div tw="flex flex-col">
              <span tw="text-2xl font-extrabold mb-2">Minseok Seo</span>
              <span tw="font-medium text-darkGrey mb-4">
                안녕하세요. 성장하는 개발자 서민석입니다.
              </span>
              <div tw="flex gap-2 text-darkGrey">
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
        {/* next/prev post */}
        <div tw="flex justify-between my-7">
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
        {/* comments */}
        <div tw="border-t border-solid border-lineGrey">
          <div tw="mt-7 mb-14 flex justify-center">
            <StaticImage src="../images/comment.png" alt="comment" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostDetailPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY년 M월 DD일")
        author
        image_alt
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.PostDetailPageQuery>) => (
  <SEO title={data.mdx?.frontmatter?.title || ""} />
);

export default PostDetailPage;
