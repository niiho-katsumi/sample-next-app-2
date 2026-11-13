import { useFetch } from "@/app/_hooks/useFetch";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { CategoryShowResponse } from "@/app/api/admin/categories/[id]/route";

export default function useGetAdminCategory(id: string) {
  const { token } = useSupabaseSession();
  const { data, error, isLoading } = useFetch<CategoryShowResponse>(
    token ? [`/api/admin/categories/${id}`, token] : null
  );
  return { category: data?.category, isLoading, error };
}
