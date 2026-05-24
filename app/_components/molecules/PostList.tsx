"use client";
import Post from "@/app/_components/molecules/Post";
import type { MicroCmsPost } from "../../_types/type";
import Thumbnail from "../atoms/Thumbnail";

type Props = {
  posts: MicroCmsPost[];
  omission: boolean;
  outline: boolean;
};

export default function PostList({ posts, omission, outline }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <>
          <Thumbnail
            title={post.thumbnail.url}
            url={post.thumbnail.url}
            width={post.thumbnail.width}
            height={post.thumbnail.height}
          />
          <Post
            key={post.id}
            PostInfo={{
              id: post.id,
              title: post.title,
              thumbnail: post.thumbnail,
              createdAt: post.createdAt,
              categories: post.categories,
              content: post.content,
            }}
            omission={omission}
            outline={outline}
          />
        </>
      ))}
    </ul>
  );
}
