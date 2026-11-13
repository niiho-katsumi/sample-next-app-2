import { useFetch } from "@/app/_hooks/useFetch";
import { CategoryShowResponse } from "@/app/api/admin/categories/[id]/route";

export default function useGetAdminCategory(id: string) {
  const { data, error, isLoading } = useFetch<CategoryShowResponse>(
    `/api/admin/categories/${id}`,
  );
  return { category: data?.category, isLoading, error };
}
