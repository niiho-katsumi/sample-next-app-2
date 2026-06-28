import { useState } from "react";

export const useDeleteAdminPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deletePost = async (id: string) => {
    setIsLoading(true);
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { deletePost, isLoading, error };
};
