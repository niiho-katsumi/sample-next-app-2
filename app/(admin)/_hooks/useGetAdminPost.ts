import { useFetch } from "@/app/_hooks/useFetch";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { PostShowResponse } from "@/app/api/admin/posts/[id]/route";

export default function useGetAdminPost(id: string) {
  const { token } = useSupabaseSession();
  const { data, error, isLoading } = useFetch<PostShowResponse>(
    token ? [`/api/admin/posts/${id}`, token] : null
  );
  return { post: data?.post, isLoading, error };
}
