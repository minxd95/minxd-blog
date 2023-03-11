import "twin.macro";

const PostListItem = () => {
  return (
    <li tw="flex flex-col border-t border-solid border-lineGrey first-of-type:border-t-0">
      <span tw="mt-12 text-[32px] font-bold">🧐 What is Lorem Ipsum?</span>
      <span tw="mt-5 text-[14px] text-darkGrey">2023년 03월 05일</span>
      <span tw="mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </span>
      <div tw="h-9 flex mt-10 mb-10 gap-2.5">
        <span tw="flex justify-center items-center px-4 py-2 rounded-full bg-snow">
          design
        </span>
        <span tw="flex justify-center items-center px-4 py-2 rounded-full bg-snow">
          lorem
        </span>
        <span tw="flex justify-center items-center px-4 py-2 rounded-full bg-snow">
          ipsum
        </span>
      </div>
    </li>
  );
};

export default PostListItem;
