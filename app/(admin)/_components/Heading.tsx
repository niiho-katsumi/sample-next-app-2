type Props = {
  text: string;
};

export default function Heading({ text }: Props) {
  return <p className="text-3xl font-bold">{text}</p>;
}
