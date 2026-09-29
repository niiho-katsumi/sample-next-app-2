"use client";

import { Post } from "../_types/type";
import PostLink from "./PostLink";

type Props = {
  posts: Post[];
  omission: boolean;
  outline: boolean;
};

export default function PostList({ posts, omission, outline }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostLink
            PostInfo={{
              id: post.id,
              title: post.title,
              content: post.content,
              thumbnailUrl: post.thumbnailUrl,
              createdAt: post.createdAt,
              updatedAt: post.updatedAt,
              postCategories: post.postCategories,
            }}
            omission={omission}
            outline={outline}
          />
        </li>
      ))}
    </ul>
  );
}
