import { adminCategorySchemaType } from "@/app/_schemas/adminCategory.schema";
import { useState } from "react";

export const usePostAdminCategory = () => {
  const [error, setError] = useState<Error | null>(null);

  const createCategory = async (data: adminCategorySchemaType) => {
    const requestBody = {
      ...data,
    };
    try {
      await fetch("/api/admin/categories/", {
        method: "POST",
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

  return { createCategory, error };
};
