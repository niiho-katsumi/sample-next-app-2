"use client";

import useGetAdminPost from "@/app/(admin)/_hooks/useGetAdminPost";
import { useParams, useRouter } from "next/navigation";
import { adminPostSchemaType } from "@/app/_schemas/adminPost.schema";
import { useGetAdminCategories } from "@/app/(admin)/_hooks/useGetAdminCategories";
import { usePutAdminPost } from "@/app/(admin)/_hooks/usePutAdminPost";
import { useDeleteAdminPost } from "@/app/(admin)/_hooks/useDeleteAdminPost";
import PostForm from "@/app/(admin)/_components/PostForm";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { post, isLoading: isPostLoading } = useGetAdminPost(id);
  const { categories, isLoading: isCategoriesLoading } =
    useGetAdminCategories();
  const { updatePost } = usePutAdminPost();
  const { deletePost } = useDeleteAdminPost();

  const initialValues = {
    title: post?.title ?? "",
    content: post?.content ?? "",
    thumbnailUrl: post?.thumbnailUrl ?? "",
    categories: post?.postCategories.map((item) => item.category.id) ?? [],
  };

  const handleUpdate = async (data: adminPostSchemaType) => {
    await updatePost(id, data);
    router.push("/admin/posts");
  };

  const handleCancel = async () => {
    await deletePost(id);
    router.push("/admin/posts");
  };

  if (isPostLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PostForm
      title={"記事編集"}
      mode={"edit"}
      initialValues={initialValues}
      categories={categories}
      onSubmit={handleUpdate}
      onDelete={handleCancel}
    />
  );
}
