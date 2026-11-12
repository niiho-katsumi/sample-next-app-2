import { fetcher } from "@/app/_libs/fetcher";
import { PostShowResponse } from "@/app/api/posts/[id]/route";
import useSWR from "swr";

export const useGetPost = (id: string) => {
  const { data, error, isLoading } = useSWR<PostShowResponse>(
    `/api/posts/${id}`,
    fetcher,
  );
  return { post: data?.post, isLoading, error };
};
