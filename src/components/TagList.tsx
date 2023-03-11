import "twin.macro";

const TagList = () => {
  return (
    <div tw="w-[240px] flex flex-col ml-6 absolute top-[60px] left-full">
      <span tw="text-[18px] font-bold mb-6">Tags</span>
      <ul tw="flex flex-col gap-3 text-darkGrey">
        <li>this</li>
        <li>is</li>
        <li>tag</li>
      </ul>
    </div>
  );
};

export default TagList;
