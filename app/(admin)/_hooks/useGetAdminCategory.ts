import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { CategoryShowResponse } from "@/app/api/admin/categories/[id]/route";
import { useEffect, useState } from "react";

export default function useGetAdminCategory(id: string) {
  const [category, setCategory] = useState<CategoryShowResponse["category"]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { token } = useSupabaseSession();

  useEffect(() => {
    if (!token) return;
    const fetchCategory = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/admin/categories/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
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
  }, [token, id]);
  return { category, isLoading, error };
}
