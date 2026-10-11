"use client";
import Thumbnail from "@/app/_components/Thumbnail";
import PostItem from "@/app/_components/PostItem";
import { PostShowResponse } from "@/app/api/posts/[id]/route";

type Props = {
  post: PostShowResponse["post"];
  omission: boolean;
  outline: boolean;
};

export default function PostDetailList({ post, omission, outline }: Props) {
  const { title, thumbnailUrl, createdAt, postCategories, content } = post;
  return (
    <>
      <div className="flex items-center justify-center">
        <Thumbnail title={title} url={thumbnailUrl} width={150} height={150} />
      </div>
      <div className="p-4">
        <PostItem
          createdAt={createdAt}
          categories={postCategories}
          title={title}
          content={content}
          omission={omission}
          outline={outline}
        />
      </div>
    </>
  );
}
