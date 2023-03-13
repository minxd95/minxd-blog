import CodeBlock from "@/components/CodeBlock";
import { MDXProvider } from "@mdx-js/react";
import "github-markdown-css";

interface MarkdownProps {
  children: React.ReactNode;
}

const Markdown = ({ children }: MarkdownProps) => {
  return (
    <div className="markdown-body">
      <MDXProvider components={{ pre: CodeBlock }}>{children}</MDXProvider>
    </div>
  );
};

export default Markdown;
