"use client";
import Link from "next/link";
import PostItem from "./PostItem";
import { PostShowResponse } from "../api/posts/[id]/route";
type Props = {
  PostInfo: PostShowResponse["post"];
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
