"use client";
import Thumbnail from "@/app/_components/atoms/Thumbnail";
import type { MicroCmsPost } from "../../../_types/type";
import PostItem from "@/app/_components/organisms/PostItem";

type Props = {
  post: MicroCmsPost;
  omission: boolean;
  outline: boolean;
};

export default function PostDetailList({ post, omission, outline }: Props) {
  const { title, thumbnail, createdAt, categories, content } = post;
  return (
    <>
      <Thumbnail
        title={title}
        url={thumbnail.url}
        width={thumbnail.width}
        height={thumbnail.height}
      />
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
