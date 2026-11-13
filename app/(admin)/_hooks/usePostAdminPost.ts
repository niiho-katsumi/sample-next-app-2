import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { adminPostSchemaType } from "@/app/_schemas/adminPost.schema";
import { useState } from "react";

export const usePostAdminPost = () => {
  const [error, setError] = useState<Error | null>(null);
  const { token } = useSupabaseSession();

  const createPost = async (data: adminPostSchemaType) => {
    if (!token) return;
    const requestBody = {
      ...data,
      categories: data.categories.map((id) => ({ id })),
    };
    try {
      await fetch("/api/admin/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(requestBody),
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        setError(error);
      }
    }
  };

  return { createPost, error };
};
