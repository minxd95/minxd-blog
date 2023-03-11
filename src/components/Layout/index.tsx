import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import BaseStyles from "@/styles/BaseStyles";
import CustomStyles from "@/styles/CustomStyles";

const Layout = ({
  children,
  isMain,
}: {
  children?: React.ReactNode;
  isMain?: boolean;
}) => {
  return (
    <div>
      <BaseStyles />
      <CustomStyles />
      <Header isMain={isMain} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
