import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { HeadProps, PageProps } from "gatsby";
import "twin.macro";

const Tags = ({ pageContext }: PageProps<undefined, { tag: string }>) => {
  console.log(pageContext);
  return <Layout>{pageContext.tag}</Layout>;
};

export const Head = ({
  pageContext,
}: HeadProps<undefined, { tag: string }>) => <SEO title={pageContext.tag} />;

export default Tags;
