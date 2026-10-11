import { CategoryShowResponse } from "@/app/api/admin/categories/[id]/route";
import { useEffect, useState } from "react";

export default function useGetAdminCategory(id: string) {
  const [category, setCategory] = useState<CategoryShowResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/admin/categories/${id}`);
        const data = await res.json();
        setCategory(data.category);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error);
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, [id]);
  return { category, isLoading, error };
}
