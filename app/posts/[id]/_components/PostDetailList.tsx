"use client";
import Thumbnail from "@/app/(_shared)/_components/atoms/Thumbnail";
import type { PostInfo } from "../../../_types/type";
import PostItem from "@/app/(_shared)/_components/organisms/PostItem";

type Props = {
  post: PostInfo;
  omission: boolean;
  outline: boolean;
};

export default function PostDetailList({ post, omission, outline }: Props) {
  const { title, thumbnailUrl, createdAt, categories, content } = post;
  return (
    <>
      <Thumbnail title={title} url={thumbnailUrl} width={768} height={384} />
      <div className="p-4">
        <PostItem
          createdAt={createdAt}
          categories={categories}
          title={title}
          content={content}
          omission={omission}
          outline={outline}
        />
      </div>
    </>
  );
}
