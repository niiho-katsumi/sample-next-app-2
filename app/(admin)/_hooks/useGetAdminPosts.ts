import { Post } from "@/app/_types/type";
import { useEffect, useState } from "react";

export const useGetAdminPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/admin/posts");
        const data = await res.json();
        setPosts(data.posts);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { posts, isLoading };
};
