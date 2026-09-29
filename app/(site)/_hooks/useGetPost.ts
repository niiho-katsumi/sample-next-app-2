import { Post } from "@/app/_types/type";
import { useEffect, useState } from "react";

export const useGetPost = (id: string) => {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/${id}`);
        const data = await res.json();
        setPost(data.post);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error);
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, []);
  return { post, isLoading, error };
};
