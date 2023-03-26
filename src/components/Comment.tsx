import { useEffect, useRef } from "react";
import "twin.macro";

const Comment = () => {
  const commentsElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterancesScript = document.createElement("script");
    utterancesScript.async = true;
    utterancesScript.src = "https://utteranc.es/client.js";
    utterancesScript.setAttribute("repo", "minxd95/minxd-blog");
    utterancesScript.setAttribute("issue-term", "pathname");
    utterancesScript.setAttribute("label", "comment");
    utterancesScript.setAttribute("theme", "github-light");
    utterancesScript.setAttribute("crossorigin", "anonymous");
    commentsElement.current?.appendChild(utterancesScript);
  }, []);

  return <div tw="w-full" ref={commentsElement} />;
};

export default Comment;
