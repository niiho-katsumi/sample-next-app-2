import { useFetch } from "@/app/_hooks/useFetch";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { PostsIndexResponse } from "@/app/api/admin/posts/route";

export const useGetAdminPosts = () => {
  const { token } = useSupabaseSession();
  const { data, error, isLoading } = useFetch<PostsIndexResponse>(
    token ? ["/api/admin/posts", token] : null
  );
  return { posts: data?.posts, isLoading, error };
};
