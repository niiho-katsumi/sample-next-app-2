import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { fetcherWithToken } from "@/app/_libs/fetcher";
import { CategoriesIndexResponse } from "@/app/api/admin/categories/route";
import useSWR from "swr";

export const useGetAdminCategories = () => {
  const { token } = useSupabaseSession();
  const { data, error, isLoading } = useSWR<
    CategoriesIndexResponse,
    Error,
    [string, string] | null
  >(token ? ["/api/admin/categories", token] : null, ([url, token]) =>
    fetcherWithToken(url, token),
  );
  return { categories: data?.categories, isLoading, error };
};
