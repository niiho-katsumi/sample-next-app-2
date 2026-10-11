import Heading from "./Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/Button";
import {
  adminCategorySchema,
  adminCategorySchemaType,
} from "@/app/_schemas/adminCategory.schema";
import HeadingInput from "./HeadingInput";

type Props = {
  title: string;
  mode: "create" | "edit";
  initialValues: adminCategorySchemaType;
  onSubmit: (data: adminCategorySchemaType) => Promise<void>;
  onDelete?: () => Promise<void>;
};

export default function CategoryForm({
  title,
  mode,
  initialValues,
  onSubmit,
  onDelete,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<adminCategorySchemaType>({
    resolver: zodResolver(adminCategorySchema),
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="block p-5 w-full">
        <Heading text={title} />
        <HeadingInput heading={"カテゴリー名"} {...register("name")} />
        {errors.name && (
          <p className="text-red-700 font-bold">{errors.name.message}</p>
        )}
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
