import { useFetch } from "@/app/_hooks/useFetch";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { CategoriesIndexResponse } from "@/app/api/admin/categories/route";

export const useGetAdminCategories = () => {
  const { token } = useSupabaseSession();
  const { data, error, isLoading } = useFetch<CategoriesIndexResponse>(
    token ? ["/api/admin/categories", token] : null
  );
  return { categories: data?.categories, isLoading, error };
};
