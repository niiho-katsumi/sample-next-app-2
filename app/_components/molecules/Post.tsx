"use client";
import Link from "next/link";

import PostItem from "../organisms/PostItem";
import { MicroCmsPost } from "@/app/_types/type";

type Props = {
  PostInfo: MicroCmsPost;
  omission: boolean;
  outline: boolean;
};

export default function Post({ PostInfo, omission, outline }: Props) {
  const { id, title, categories, createdAt, content } = PostInfo;
  return (
      <Link href={`/posts/${id}`}>
        <PostItem
          createdAt={createdAt}
          categories={categories}
          title={title}
          content={content}
          omission={omission}
          outline={outline}
        />
      </Link>
  );
}
