"use client";

import PostList from "../_components/PostList";
import { useGetPosts } from "./_hooks/useGetPosts";

export default function Home() {
  const { posts, isLoading, error } = useGetPosts();

  if (isLoading) return <p>読み込み中...</p>;

  if (posts.length === 0) return <p>記事が見つかりません</p>;

  return (
    <>
      <PostList posts={posts} omission={true} outline={true} />
    </>
  );
}
