"use client";

import { supabase } from "../_libs/supabase";
import { useForm } from "react-hook-form";
import { authSchema, authSchemaType } from "../_schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import HeadingInput from "../(admin)/_components/HeadingInput";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<authSchemaType>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: authSchemaType) => {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: `http://locakhost:3000/login`,
      },
    });

    if (error) {
      alert("登録に失敗しました");
    } else {
      alert("確認メールを送信しました。");
    }
  };

  return (
    <div className="flex justify-center pt-60">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-100"
      >
        <div>
          <HeadingInput
            htmlFor="email"
            heading={"メールアドレス"}
            {...register("email")}
            placeholder="name@company.com"
            required
            id="email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-700 font-bold">{errors.email.message}</p>
          )}
        </div>
        <div>
          <HeadingInput
            htmlFor="password"
            heading={"パスワード"}
            {...register("password")}
            placeholder="••••••••"
            required
            id="password"
            disabled={isSubmitting}
          />
          {errors.password && (
            <p className="text-red-700 font-bold">{errors.password.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            disabled={isSubmitting}
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
}
