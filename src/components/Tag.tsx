import "twin.macro";
import tw from "twin.macro";

interface TagProps {
  text: string | null;
  isActive?: boolean;
  count?: number;
}
const Tag = ({ text, isActive, count }: TagProps) => {
  return (
    <span
      css={[
        tw`h-8 flex justify-center items-center px-4 rounded-full bg-gray-50 text-sm`,
        isActive && tw`bg-gray-200 transition-all`,
      ]}
    >
      {text}&nbsp;
      {count && `(${count})`}
    </span>
  );
};

export default Tag;
