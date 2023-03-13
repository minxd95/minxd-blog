import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollY(window.scrollY);
    });
  }, []);

  return { scroll: scrollY };
};

export default useScroll;
