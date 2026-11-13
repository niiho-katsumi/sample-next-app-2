import { useFetch } from "@/app/_hooks/useFetch";
import { CategoriesIndexResponse } from "@/app/api/admin/categories/route";

export const useGetAdminCategories = () => {
  const { data, error, isLoading } = useFetch<CategoriesIndexResponse>(
    "/api/admin/categories",
  );
  return { categories: data?.categories, isLoading, error };
};
