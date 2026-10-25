import { adminCategorySchemaType } from "@/app/_schemas/adminCategory.schema";
import { useState } from "react";

export const usePutAdminCategory = () => {
  const [error, setError] = useState<Error | null>(null);

  const updateCategory = async (id: string, data: adminCategorySchemaType) => {
    const requestBody = {
      ...data
    };
    try {
      await fetch(`/api/admin/categories/${id}`, {
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

  return { updateCategory, error };
};
