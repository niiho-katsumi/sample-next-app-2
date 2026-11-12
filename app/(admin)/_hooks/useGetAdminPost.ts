import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { fetcherWithToken } from "@/app/_libs/fetcher";
import { PostShowResponse } from "@/app/api/admin/posts/[id]/route";
import useSWR from "swr";

export default function useGetAdminPost(id: string) {
  const { token } = useSupabaseSession();
  const { data, error, isLoading } = useSWR<
    PostShowResponse,
    Error,
    [string, string] | null
  >(token ? [`/api/admin/posts/${id}`, token] : null, ([url, token]) =>
    fetcherWithToken(url, token),
  );
  return { post: data?.post, isLoading, error };
}
