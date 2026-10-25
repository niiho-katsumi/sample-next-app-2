"use client";

import { useRouter } from "next/navigation";
import { adminPostSchemaType } from "@/app/_schemas/adminPost.schema";
import { useGetAdminCategories } from "@/app/(admin)/_hooks/useGetAdminCategories";
import CategoryForm from "@/app/(admin)/_components/CategoryForm";
import { usePostAdminCategory } from "@/app/(admin)/_hooks/usePostAdminCategory";
import { adminCategorySchemaType } from "@/app/_schemas/adminCategory.schema";

export default function Page() {
  const router = useRouter();
  const { createCategory, error } = usePostAdminCategory();
  const { categories, isLoading: isCategoriesLoading } =
    useGetAdminCategories();

  const initialValues = {
    name: ""
  };

  const handleCreate = async (data: adminCategorySchemaType) => {
    await createCategory(data);
    router.push("/admin/categories");
  };

  if (isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <CategoryForm
      title={"作成"}
      mode={"create"}
      initialValues={initialValues}
      onSubmit={handleCreate}
    />
  );
}
