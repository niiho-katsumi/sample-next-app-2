type Props = {
  category: string;
};

export default function Tag({ category }: Props) {
  return (
    <div className="border-2 border-solid border-[#06c] rounded-[0.2rem] font-[0.8rem] mr-3.5 text-[#06c] py-[0.2rem] px-[0.4rem]">
      {category}
    </div>
  );
}
