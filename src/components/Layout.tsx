import React from "react";
import { GlobalStyles } from "twin.macro";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default Layout;
