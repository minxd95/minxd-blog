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
        tw`flex justify-center items-center px-4 py-2 rounded-full bg-snow`,
        isActive && tw`bg-lineGrey transition-all`,
      ]}
    >
      {text}&nbsp;
      {count && `(${count})`}
    </span>
  );
};

export default Tag;
