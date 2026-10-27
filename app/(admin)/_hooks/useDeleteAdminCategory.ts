import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { useState } from "react";

export const useDeleteAdminCategory = () => {
  const [error, setError] = useState<Error | null>(null);
  const { token } = useSupabaseSession();

  const deleteCategory = async (id: string) => {
    if (!token) return;
    try {
      await fetch(`/api/admin/categories/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
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
