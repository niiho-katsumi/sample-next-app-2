import { CategoriesIndexResponse } from "@/app/api/admin/categories/route";
import CategoryItem from "./CategoryItem";

type Props = {
  categories: CategoriesIndexResponse["categories"];
};

export default function PostList({ categories }: Props) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          id={String(category.id)}
          title={category.name}
        />
      ))}
    </ul>
  );
}
