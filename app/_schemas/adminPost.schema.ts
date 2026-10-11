import { z } from "zod";

export const adminPostSchema = z.object({
  title: z.string().min(1, "タイトルを入力してください"),
  content: z.string().min(1, "内容を入力してください"),
  thumbnailUrl: z.url({
    message: "正しいURLを入力してください",
  }),
  categories: z.array(z.number()),
});

export type adminPostSchemaType = z.infer<typeof adminPostSchema>;
