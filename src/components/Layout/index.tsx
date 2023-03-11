import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import GlobalStyles from "@/styles/GlobalStyles";

const Layout = ({
  children,
  isMain,
}: {
  children?: React.ReactNode;
  isMain?: boolean;
}) => {
  return (
    <div>
      <GlobalStyles />
      <Header isMain={isMain} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
