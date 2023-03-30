import "twin.macro";

interface TagProps {
  text: string;
}
const Tag = ({ text }: TagProps) => {
  return (
    <span tw="flex justify-center items-center px-4 py-2 rounded-full bg-snow">
      {text}
    </span>
  );
};

export default Tag;
