import { Category } from "@/app/_types/type";
import { useEffect, useState } from "react";

export default function useGetAdminCategory(id: string) {
  const [category, setCategory] = useState<Category>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/admin/categories/${id}`);
        const data = await res.json();
        setCategory(data.category);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, [id]);
  return { category, isLoading };
}
