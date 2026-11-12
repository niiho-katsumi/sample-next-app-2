import { fetcher } from "@/app/_libs/fetcher";
import { PostsIndexResponse } from "@/app/api/posts/route";
import useSWR from "swr";

export const useGetPosts = () => {
  const { data, error, isLoading } = useSWR<PostsIndexResponse>(
    "/api/posts",
    fetcher,
  );
  return { posts: data?.posts, isLoading, error };
};
