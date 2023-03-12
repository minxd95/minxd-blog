import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Main from "@/components/Layout/Main";
import BaseStyles from "@/styles/BaseStyles";
import CustomStyles from "@/styles/CustomStyles";

interface LayoutProps {
  children?: React.ReactNode;
  isMain?: boolean;
}

const Layout = ({ children, isMain = false }: LayoutProps) => {
  return (
    <div>
      <BaseStyles />
      <CustomStyles />
      <Header isMain={isMain} />
      <Main isMain={isMain}>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
