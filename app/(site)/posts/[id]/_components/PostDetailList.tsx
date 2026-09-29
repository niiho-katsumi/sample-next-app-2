"use client";
import Thumbnail from "@/app/_components/Thumbnail";
import PostItem from "@/app/_components/PostItem";
import { Post } from "@/app/_types/type";

type Props = {
  post: Post;
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
