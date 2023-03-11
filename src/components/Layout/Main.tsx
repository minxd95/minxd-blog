import tw from "twin.macro";

interface MainProps {
  children: React.ReactNode;
  isMain: boolean;
}

const Main = ({ children, isMain }: MainProps) => {
  return (
    <main
      css={[
        isMain
          ? tw`min-h-[calc(100vh - 320px)]`
          : tw`min-h-[calc(100vh - 120px)]`,
      ]}
    >
      {children}
    </main>
  );
};

export default Main;
