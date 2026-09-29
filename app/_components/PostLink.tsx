"use client";
import Link from "next/link";
import { Post } from "@/app/_types/type";
import PostItem from "./PostItem";
type Props = {
  PostInfo: Post;
  omission: boolean;
  outline: boolean;
};

export default function PostLink({ PostInfo, omission, outline }: Props) {
  const { id, title, postCategories, createdAt, content, thumbnailUrl } =
    PostInfo;
  return (
    <Link href={`/posts/${id}`}>
      <PostItem
        createdAt={createdAt}
        categories={postCategories}
        title={title}
        content={content}
        omission={omission}
        outline={outline}
        thumbnailUrl={thumbnailUrl}
      />
    </Link>
  );
}
