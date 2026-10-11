"use client";
import Tag from "./Tag";
import { PostShowResponse } from "../api/posts/[id]/route";


type Props = {
  categories: PostShowResponse["post"]["postCategories"];
};

export default function TagList({ categories }: Props) {
  return (
    <div className="flex flex-wrap">
      {categories.map((category) => (
        <Tag key={category.category.id} category={category.category.name} />
      ))}
    </div>
  );
}
