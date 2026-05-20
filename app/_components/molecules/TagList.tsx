import Tag from "../atoms/Tag";

type Props = {
  categories: string[];
};

export default function TagList({ categories }: Props) {
  return (
    <div className="flex flex-wrap">
      {categories.map((category) => (
        <Tag key={crypto.randomUUID()} category={category} />
      ))}
    </div>
  );
}
