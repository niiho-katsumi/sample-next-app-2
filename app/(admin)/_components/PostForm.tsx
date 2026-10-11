
import Heading from "./Heading";
import {
  adminPostSchema,
  adminPostSchemaType,
} from "@/app/_schemas/adminPost.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { CategoriesIndexResponse } from "@/app/api/admin/categories/route";
import Button from "@/app/_components/Button";
import HeadingCategoryButtons from "./HeadingCategoryButtons";
import HeadingInput from "./HeadingInput";
import HeadingTextArea from "./HeadingTextArea";

type Props = {
  title: string;
  mode: "create" | "edit";
  initialValues: adminPostSchemaType;
  categories: CategoriesIndexResponse["categories"];
  onSubmit: (data: adminPostSchemaType) => Promise<void>;
  onDelete?: () => Promise<void>;
};

export default function PostForm({
  title,
  mode,
  initialValues,
  categories,
  onSubmit,
  onDelete,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue,
  } = useForm<adminPostSchemaType>({
    resolver: zodResolver(adminPostSchema),
    defaultValues: initialValues,
  });

  const selectedCategories = useWatch({ control, name: "categories" });

  const handleCategoryClick = (id: number) => {
    const nextCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((item) => item !== id)
      : [...selectedCategories, id];
    setValue("categories", nextCategories);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="block p-5 w-full">
        <Heading text={title} />
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
        <HeadingCategoryButtons
          heading={"カテゴリー"}
          values={categories ?? []}
          selectedIds={selectedCategories}
          onToggle={handleCategoryClick}
        />
        <div className="flex gap-2 mt-4">
          <Button
            variant={"update"}
            isSubmitting={isSubmitting}
            text={mode === "edit" ? "更新" : "作成"}
            type="submit"
          />
          {mode === "edit" && onDelete && (
            <Button
              variant={"cancel"}
              isSubmitting={isSubmitting}
              text={"削除"}
              type="button"
              onClick={onDelete}
            />
          )}
        </div>
      </div>
    </form>
  );
}
