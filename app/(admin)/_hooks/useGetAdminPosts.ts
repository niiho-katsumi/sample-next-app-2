import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { fetcherWithToken } from "@/app/_libs/fetcher";
import { PostsIndexResponse } from "@/app/api/admin/posts/route";
import useSWR from "swr";

export const useGetAdminPosts = () => {
  const { token } = useSupabaseSession();
  const { data, error, isLoading } = useSWR<
    PostsIndexResponse,
    Error,
    [string, string] | null
  >(token ? ["/api/admin/posts", token] : null, ([url, token]) =>
    fetcherWithToken(url, token),
  );
  return { posts: data?.posts, isLoading, error };
};
