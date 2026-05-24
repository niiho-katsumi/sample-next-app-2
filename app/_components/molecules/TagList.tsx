"use client";
import Tag from "../atoms/Tag";

type Props = {
  categories: {
    id: string;
    name: string;
  }[];
};

export default function TagList({ categories }: Props) {
  return (
    <div className="flex flex-wrap">
      {categories.map((category) => (
        <Tag key={category.id} category={category.name} />
      ))}
    </div>
  );
}
