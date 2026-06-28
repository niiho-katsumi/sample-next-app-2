import { Category } from "@/app/_types/type";
import { useEffect, useState } from "react";

export const useGetAdminCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/admin/categories");
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
