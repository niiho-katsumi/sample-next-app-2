import { adminPostSchemaType } from "@/app/_schemas/adminPost.schema";
import { useState } from "react";

export const usePutAdminPost = () => {
  const [error, setError] = useState<Error | null>(null);

  const updatePost = async (id: string, data: adminPostSchemaType) => {
    const requestBody = {
      ...data,
      categories: data.categories.map((id) => ({ id })),
    };
    try {
      await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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

  return { updatePost, error };
};
