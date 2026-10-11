"use client";

import { useRouter } from "next/navigation";
import { adminPostSchemaType } from "@/app/_schemas/adminPost.schema";
import { useGetAdminCategories } from "@/app/(admin)/_hooks/useGetAdminCategories";
import { usePostAdminPost } from "@/app/(admin)/_hooks/usePostAdminPost";
import PostForm from "@/app/(admin)/_components/PostForm";

export default function Page() {
  const router = useRouter();
  const { createPost, error } = usePostAdminPost();
  const { categories, isLoading: isCategoriesLoading } =
    useGetAdminCategories();

  const initialValues = {
    title: "",
    content: "",
    thumbnailUrl: "",
    categories: [],
  };

  const handleCreate = async (data: adminPostSchemaType) => {
    await createPost(data);
    router.push("/admin/posts");
  };

  if (isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PostForm
      title={"記事作成"}
      mode={"create"}
      initialValues={initialValues}
      categories={categories}
      onSubmit={handleCreate}
    />
  );
}
