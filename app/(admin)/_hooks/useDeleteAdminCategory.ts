import { useState } from "react";

export const useDeleteAdminCategory = () => {
  const [error, setError] = useState<Error | null>(null);

  const deleteCategory = async (id: string) => {
    try {
      await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        setError(error);
      }
    }
  };

  return { deleteCategory, error };
};
