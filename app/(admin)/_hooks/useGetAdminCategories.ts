import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { CategoriesIndexResponse } from "@/app/api/admin/categories/route";
import { useEffect, useState } from "react";

export const useGetAdminCategories = () => {
  const [categories, setCategories] = useState<
    CategoriesIndexResponse["categories"]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { token } = useSupabaseSession();

  useEffect(() => {
    if (!token) return;
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/admin/categories", {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const data = await res.json();

        setCategories(data.categories);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error);
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { categories, isLoading, error };
};
