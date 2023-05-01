type TPostPageContext = {
  id: string;
  previousPost: {
    title: string | null;
    slug: string | null;
  } | null;
  nextPost: {
    title: string | null;
    slug: string | null;
  } | null;
};

export default TPostPageContext;
