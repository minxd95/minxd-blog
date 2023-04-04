import Layout from "@/components/Layout";
import TableOfContents from "@/components/TableOfContents";
import SEO from "@/components/SEO";
import { mdiInstagram, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import { graphql, HeadProps, PageProps } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import Markdown from "@/components/Markdown";
import "twin.macro";
import TTableOfContents from "@/types/TTableOfContents";
import Comment from "@/components/Comment";
import Tag from "@/components/Tag";

const PostDetailPage = ({
  data,
  children,
}: PageProps<Queries.PostDetailPageQuery>) => {
  return (
    <Layout>
      <TableOfContents
        items={data.mdx?.tableOfContents?.items as TTableOfContents[]}
      />
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
            {data.mdx?.frontmatter?.tags?.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
        {/* contents */}
        <div tw="pt-8 pb-[74px] border-t border-solid border-lineGrey">
          {data.mdx?.frontmatter?.image && (
            <div tw="mb-8">
              <GatsbyImage
                image={
                  getImage(
                    data.mdx?.frontmatter?.image
                      ?.childImageSharp as ImageDataLike
                  ) as IGatsbyImageData
                }
                alt={data.mdx?.frontmatter?.image_alt || ""}
              />
            </div>
          )}
          <Markdown>{children}</Markdown>
        </div>
        {/* profile */}
        <div tw="h-[200px]">
          <div tw="w-full h-full flex items-center">
            <div tw="w-[123px] h-[123px] mr-8 rounded-full overflow-hidden isolate">
              <StaticImage src={"../images/me.jpeg"} alt="me" />
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
        {/* todo: next/prev post */}
        {/* <PostNavigator /> */}
        {/* comments */}
        <div tw="border-t border-solid border-lineGrey">
          <div tw="mt-10 mb-14 flex justify-center">
            <Comment />
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
        tags
      }
      tableOfContents
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.PostDetailPageQuery>) => (
  <SEO title={data.mdx?.frontmatter?.title || ""} />
);

export default PostDetailPage;
