type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return <p className="text-[1.5rem] mt-2 mb-4 ">{title}</p>;
}
