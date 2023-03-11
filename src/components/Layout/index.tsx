import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Main from "@/components/Layout/Main";
import BaseStyles from "@/styles/BaseStyles";
import CustomStyles from "@/styles/CustomStyles";

const Layout = ({
  children,
  isMain = false,
}: {
  children?: React.ReactNode;
  isMain?: boolean;
}) => {
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
