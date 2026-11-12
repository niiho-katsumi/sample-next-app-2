import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { fetcherWithToken } from "@/app/_libs/fetcher";
import { CategoryShowResponse } from "@/app/api/admin/categories/[id]/route";
import useSWR from "swr";

export default function useGetAdminCategory(id: string) {
  const { token } = useSupabaseSession();
  const { data, error, isLoading } = useSWR<
    CategoryShowResponse,
    Error,
    [string, string] | null
  >(token ? [`/api/admin/categories/${id}`, token] : null, ([url, token]) =>
    fetcherWithToken(url, token),
  );
  return { category: data?.category, isLoading, error };
}
