"use client";

import { useParams, useRouter } from "next/navigation";
import { useGetAdminCategories } from "@/app/(admin)/_hooks/useGetAdminCategories";
import useGetAdminCategory from "@/app/(admin)/_hooks/useGetAdminCategory";
import CategoryForm from "@/app/(admin)/_components/CategoryForm";
import { usePutAdminCategory } from "@/app/(admin)/_hooks/usePutAdminCategory";
import { useDeleteAdminCategory } from "@/app/(admin)/_hooks/useDeleteAdminCategory";
import { adminCategorySchemaType } from "@/app/_schemas/adminCategory.schema";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { category, isLoading } = useGetAdminCategory(id);
  const { updateCategory } = usePutAdminCategory();
  const { deleteCategory } = useDeleteAdminCategory();

  const initialValues = {
    name: category?.name ?? "",
  };

  const handleUpdate = async (data: adminCategorySchemaType) => {
    await updateCategory(id, data);
    router.push("/admin/categories");
  };

  const handleCancel = async () => {
    await deleteCategory(id);
    router.push("/admin/categories");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <CategoryForm
      title={"記事編集"}
      mode={"edit"}
      initialValues={initialValues}
      onSubmit={handleUpdate}
      onDelete={handleCancel}
    />
  );
}
