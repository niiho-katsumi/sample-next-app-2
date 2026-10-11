import { useState } from "react";

export const useDeleteAdminPost = () => {
  const [error, setError] = useState<Error | null>(null);

  const deletePost = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        setError(error);
      }
    }
  };

  return { deletePost, error };
};
