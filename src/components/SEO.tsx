import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ title }: { title: string }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default SEO;
