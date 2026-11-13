import { useFetch } from "@/app/_hooks/useFetch";
import { PostShowResponse } from "@/app/api/posts/[id]/route";

export const useGetPost = (id: string) => {
  const { data, error, isLoading } = useFetch<PostShowResponse>(
    `/api/posts/${id}`,
  );
  return { post: data?.post, isLoading, error };
};
