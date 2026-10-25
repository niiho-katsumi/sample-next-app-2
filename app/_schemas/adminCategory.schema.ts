import { z } from "zod";

export const adminCategorySchema = z.object({
  name: z.string().min(1, "カテゴリー名を入力してください"),
});

export type adminCategorySchemaType = z.infer<typeof adminCategorySchema>;
