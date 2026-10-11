import { PostShowResponse } from "@/app/api/admin/posts/[id]/route";
import { useEffect, useState } from "react";

export default function useGetAdminPost(id: string) {
  const [post, setPost] = useState<PostShowResponse["post"]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/admin/posts/${id}`);
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
  }, [id]);
  return { post, isLoading, error };
}
