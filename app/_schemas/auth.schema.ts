import { z } from "zod";

export const authSchema = z.object({
  email: z.email("メールアドレスの形式で入力してください"),
  password: z.string().min(7, "パスワードは7文字以上で入力してください"),
});

export type authSchemaType = z.infer<typeof authSchema>;

