"use client";
import { PostCategory } from "@/app/_types/type";
import Tag from "./Tag";


type Props = {
  categories: PostCategory[];
};

export default function TagList({ categories }: Props) {
  return (
    <div className="flex flex-wrap">
      {categories.map((category) => (
        <Tag key={category.id} category={category.category.name} />
      ))}
    </div>
  );
}
