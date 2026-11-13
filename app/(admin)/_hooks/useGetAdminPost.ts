import { useFetch } from "@/app/_hooks/useFetch";
import { PostShowResponse } from "@/app/api/admin/posts/[id]/route";

export default function useGetAdminPost(id: string) {
  const { data, error, isLoading } = useFetch<PostShowResponse>(
    `/api/admin/posts/${id}`,
  );
  return { post: data?.post, isLoading, error };
}
