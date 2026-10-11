import { PostsIndexResponse } from "@/app/api/admin/posts/route";
import { useEffect, useState } from "react";

export const useGetAdminPosts = () => {
  const [posts, setPosts] = useState<PostsIndexResponse["posts"]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/admin/posts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error);
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { posts, isLoading, error };
};
