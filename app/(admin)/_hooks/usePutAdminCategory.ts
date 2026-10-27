import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { adminCategorySchemaType } from "@/app/_schemas/adminCategory.schema";
import { useState } from "react";

export const usePutAdminCategory = () => {
  const [error, setError] = useState<Error | null>(null);
  const { token } = useSupabaseSession();

  const updateCategory = async (id: string, data: adminCategorySchemaType) => {
    if (!token) return;
    const requestBody = {
      ...data,
    };
    try {
      await fetch(`/api/admin/categories/${id}`, {
        method: "PUT",
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

  return { updateCategory, error };
};
