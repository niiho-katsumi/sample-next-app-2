import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "名前を入力してください")
    .max(30, "名前は30字以内で入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .pipe(z.email({ error: "メールアドレスの形式で入力してください" })),
  message: z
    .string()
    .min(1, "本文を入力してください")
    .max(500, "本文は500字以内で入力してください"),
});

export type contactSchemaType = z.infer<typeof contactSchema>;
