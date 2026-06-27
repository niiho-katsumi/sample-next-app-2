import { Post } from "@/app/_types/type";
import { useEffect, useState } from "react";

export default function useGetAdminPost(id: string) {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/admin/posts/${id}`);
        const data = await res.json();
        setPost(data.post);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);
  return { post, isLoading };
}
