"use client";
import Post from "@/app/(_shared)/_components/molecules/Post";
import type { PostInfo } from "../../posts/_types/type";


type Props = {
  posts: PostInfo[];
  omission: boolean;
  outline: boolean;
};

export default function PostList({ posts, omission, outline }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <Post
          key={post.id}
          PostInfo={{
            id: post.id,
            title: post.title,
            thumbnailUrl: post.thumbnailUrl,
            createdAt: post.createdAt,
            categories: post.categories,
            content: post.content,
          }}
          omission={omission}
          outline={outline}
        />
      ))}
    </ul>
  );
}
