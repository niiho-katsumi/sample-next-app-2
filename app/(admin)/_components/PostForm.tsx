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
import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/app/_libs/supabase";
import Image from "next/image";

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
  const [thumbnailImageKey, setThumbnailImageKey] = useState(
    initialValues.thumbnailImageKey,
  );
  const [thumbnailImageUrl, setThumbnailImageUrl] = useState<null | string>(
    null,
  );

  const selectedCategories = useWatch({ control, name: "categories" });

  const handleCategoryClick = (id: number) => {
    const nextCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((item) => item !== id)
      : [...selectedCategories, id];
    setValue("categories", nextCategories);
  };

  const handleImageChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    if (!event.target.files || event.target.files.length == 0) {
      return;
    }

    const file = event.target.files[0];

    const filePath = `private/${uuidv4()}`;

    const { data, error } = await supabase.storage
      .from("post_thumbnail")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      alert(error.message);
      return;
    }

    setThumbnailImageKey(data.path);
    setValue("thumbnailImageKey", data.path);
  };

  useEffect(() => {
    if (!thumbnailImageKey) return;

    const fetcher = async () => {
      const {
        data: { publicUrl },
      } = await supabase.storage
        .from("post_thumbnail")
        .getPublicUrl(thumbnailImageKey);

      setThumbnailImageUrl(publicUrl);
    };
    fetcher();
  }, [thumbnailImageKey]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="block p-5 w-full">
        <Heading text={title} />
        <HeadingInput
          htmlFor="title"
          heading={"タイトル"}
          {...register("title")}
          id="title"
        />
        {errors.title && (
          <p className="text-red-700 font-bold">{errors.title.message}</p>
        )}
        <HeadingTextArea
          htmlFor="content"
          heading={"内容"}
          {...register("content")}
          id="content"
        />
        {errors.content && (
          <p className="text-red-700 font-bold">{errors.content.message}</p>
        )}
        <HeadingInput
          htmlFor="thumbnailImageKey"
          heading={"サムネイルURL"}
          type="file"
          id="thumbnailImageKey"
          accept="image/*"
          onChange={handleImageChange}
        />
        {errors.thumbnailImageKey && (
          <p className="text-red-700 font-bold">
            {errors.thumbnailImageKey?.message}
          </p>
        )}
        {thumbnailImageUrl && (
          <div className="mt-2">
            <Image
              src={thumbnailImageUrl}
              alt="thumbnail"
              width={400}
              height={400}
            />
          </div>
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
