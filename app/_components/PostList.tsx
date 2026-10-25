"use client";

import { PostsIndexResponse } from "../api/posts/route";
import PostLink from "./PostLink";

type Props = {
  posts: PostsIndexResponse["posts"];
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
