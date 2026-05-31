"use client";
import { useParams } from "next/navigation";
import PostDetailList from "./_components/PostDetailList";
import { useEffect, useState } from "react";
import type { MicroCmsPost } from "../../_types/type";

export default function Page() {
  const [post, setPost] = useState<MicroCmsPost>();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setIsLoading(true);
    const fetcher = async (): Promise<void> => {
      const res = await fetch(
        `https://9e64p11jmv.microcms.io/api/v1/posts${id}`,
        {
          headers: {
            "X-MICROCMS-API-KEY": process.env
              .NEXT_PUBLIC_MICROCMS_API_KEY as string,
          },
        },
      );
      const data = await res.json();
      setPost(data.post);
      setIsLoading(false);
    };
    fetcher();
  }, []);

  if (isLoading) return <p>読み込み中...</p>;

  if (!post) return <p>記事が見つかりません</p>;

  return (
    <>
      <PostDetailList post={post} omission={false} outline={false} />
    </>
  );
}
