import TTableOfContents from "@/types/TTableOfContents";
import { useEffect, useState } from "react";

const useTOC = (items: TTableOfContents[]) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    items.forEach((item) => {
      observer.observe(
        document.getElementById(item.url.slice(1)) as HTMLElement
      );
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  return activeId;
};

export default useTOC;
