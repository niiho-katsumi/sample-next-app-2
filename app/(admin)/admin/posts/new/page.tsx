"use client";

import { useParams, useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  adminPostSchema,
  adminPostSchemaType,
} from "@/app/_schemas/adminPost.schema";
import Button from "@/app/_components/atoms/Button";
import { useGetAdminCategories } from "@/app/(admin)/_hooks/useGetAdminCategories";
import Heading from "@/app/(admin)/_components/Heading";
import HeadingInput from "../_components/HeadingInput";
import HeadingTextArea from "../_components/HeadingTextArea";
import HeadingButtons from "../_components/HeadingCategoryButtons";
import { usePostAdminPost } from "@/app/(admin)/_hooks/usePostAdminPost";

export default function Page() {
  const router = useRouter();
  const { createPost, error } = usePostAdminPost();
  const { categories, isLoading: isCategoriesLoading } =
    useGetAdminCategories();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue,
  } = useForm<adminPostSchemaType>({
    resolver: zodResolver(adminPostSchema),
    values: {
      title: "",
      content: "",
      thumbnailUrl: "",
      categories: [],
    },
  });

  const selectedCategories = useWatch({ control, name: "categories" });

  const handleCreate = async (data: adminPostSchemaType) => {
    await createPost(data);
    router.push("/admin/posts");
  };

  const handleCategoryClick = (id: number) => {
    const nextCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((item) => item !== id)
      : [...selectedCategories, id];
    setValue("categories", nextCategories);
  };

  if (isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <div className="block p-5 w-full">
        <Heading text={"記事作成"} />
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
            text={"作成"}
            type="submit"
          />
        </div>
      </div>
    </form>
  );
}
