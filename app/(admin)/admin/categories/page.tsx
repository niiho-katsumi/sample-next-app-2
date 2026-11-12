"use client";
import LinkButton from "../../_components/LinkButton";
import Heading from "../../_components/Heading";
import CategoryList from "../../_components/CategoryList";
import { useGetAdminCategories } from "../../_hooks/useGetAdminCategories";

export default function page() {
  const { categories, isLoading } = useGetAdminCategories();

  if (isLoading) return <p>読み込み中...</p>;

  return (
    <div className="block p-5 w-full">
      <div className="flex justify-between">
        <Heading text={"カテゴリー一覧"} />
        <LinkButton to={"/admin/categories/new"} text={"新規投稿"}></LinkButton>
      </div>
      {!categories || categories.length === 0 ? (
        <p>カテゴリーが見つかりません</p>
      ) : (
        <CategoryList categories={categories} />
      )}
    </div>
  );
}
