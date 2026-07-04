"use client";

import Heading from "@/app/(admin)/_components/Heading";
import HeadingInput from "../_components/HeadingInput";
import HeadingTextArea from "../_components/HeadingTextArea";
import useGetAdminPost from "@/app/(admin)/_hooks/useGetAdminPost";
import { useParams, useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  adminPostSchema,
  adminPostSchemaType,
} from "@/app/_schemas/adminPost.schema";
import Button from "@/app/_components/atoms/Button";
import { useGetAdminCategories } from "@/app/(admin)/_hooks/useGetAdminCategories";
import HeadingButtons from "../_components/HeadingCategoryButtons";
import { usePutAdminPost } from "@/app/(admin)/_hooks/usePutAdminPost";
import { useDeleteAdminPost } from "@/app/(admin)/_hooks/useDeleteAdminPost";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { post, isLoading: isPostLoading } = useGetAdminPost(id);
  const { categories, isLoading: isCategoriesLoading } =
    useGetAdminCategories();
  const { updatePost } = usePutAdminPost();
  const { deletePost } = useDeleteAdminPost();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue,
  } = useForm<adminPostSchemaType>({
    resolver: zodResolver(adminPostSchema),
    values: {
      title: post?.title ?? "",
      content: post?.content ?? "",
      thumbnailUrl: post?.thumbnailUrl ?? "",
      categories: post?.postCategories.map((item) => item.category.id) ?? [],
    },
  });

  const selectedCategories = useWatch({ control, name: "categories" });

  const handleUpdate = async (data: adminPostSchemaType) => {
    await updatePost(id, data);
    router.push("/admin/posts");
  };

  const handleCancel = async () => {
    await deletePost(id);
    router.push("/admin/posts");
  };

  const handleCategoryClick = (id: number) => {
    const nextCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((item) => item !== id)
      : [...selectedCategories, id];
    setValue("categories", nextCategories);
  };

  if (isPostLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(handleUpdate)}>
      <div className="block p-5 w-full">
        <Heading text={"記事編集"} />
        <HeadingInput heading={"タイトル"} {...register("title")} />
        {errors.title && (
          <p className="text-red-700 font-bold">{errors.title.message}</p>
        )}
        <HeadingTextArea heading={"内容"} {...register("content")} />
        {errors.content && (
          <p className="text-red-700 font-bold">{errors.content.message}</p>
        )}
        <HeadingInput heading={"サムネイルURL"} {...register("thumbnailUrl")} />
        {errors.content && (
          <p className="text-red-700 font-bold">
            {errors.thumbnailUrl?.message}
          </p>
        )}
        <HeadingButtons
          heading={"カテゴリー"}
          values={categories ?? []}
          selectedIds={selectedCategories}
          onToggle={handleCategoryClick}
        />
        <div className="flex gap-2 mt-4">
          <Button
            variant={"update"}
            isSubmitting={isSubmitting}
            text={"更新"}
            type="submit"
          />
          <Button
            variant={"cancel"}
            isSubmitting={isSubmitting}
            text={"削除"}
            type="button"
            onClick={handleCancel}
          />
        </div>
      </div>
    </form>
  );
}
