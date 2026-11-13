import { useFetch } from "@/app/_hooks/useFetch";
import { PostsIndexResponse } from "@/app/api/posts/route";

export const useGetPosts = () => {
  const { data, error, isLoading } = useFetch<PostsIndexResponse>("/api/posts");
  return { posts: data?.posts, isLoading, error };
};
