"use client";

import PostList from "./_components/PostList";
import { useGetAdminPosts } from "../../_hooks/useGetAdminPosts";
import LinkButton from "../../_components/LinkButton";
import Heading from "../../_components/Heading";

export default function page() {
  const { posts, isLoading } = useGetAdminPosts();

  if (isLoading) return <p>読み込み中...</p>;

  if (!posts) return <p>記事が見つかりません</p>;

  return (
    <div className="block p-5 w-full">
      <div className="flex justify-between">
        <Heading text={"記事一覧"}/>
        <LinkButton to={"/admin/posts/new"} text={"新規投稿"}></LinkButton>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
