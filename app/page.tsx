"use client";
import { useEffect, useState } from "react";
import { MicroCmsPost } from "./_types/type";
import PostList from "./_components/molecules/PostList";

export default function Home() {
  const [posts, setPosts] = useState<MicroCmsPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetcher = async (): Promise<void> => {
      const res = await fetch("https://9e64p11jmv.microcms.io/api/v1/posts", {
        headers: {
          "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY as string,
        },
      });
      const { contents } = await res.json();
      setPosts(contents);
      setIsLoading(false);
    };
    fetcher();
  }, []);

  if (isLoading) return <p>読み込み中...</p>;

  if (!posts) return <p>記事が見つかりません</p>;

  return (
    <>
      <PostList posts={posts} omission={true} outline={true} />
    </>
  );
}
