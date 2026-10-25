"use client";
import { useParams } from "next/navigation";
import PostDetailList from "./_components/PostDetailList";
import { useGetPost } from "../../_hooks/useGetPost";

export default function Page() {

  const { id } = useParams<{ id: string }>();
  const { post, isLoading, error } = useGetPost(id);

  if (isLoading) return <p>読み込み中...</p>;

  if (!post) return <p>記事が見つかりません</p>;

  return (
    <>
      <PostDetailList post={post} omission={false} outline={false} />
    </>
  );
}
