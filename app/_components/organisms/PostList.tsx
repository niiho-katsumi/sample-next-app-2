import type { PostInfo } from "../../type";
import Post from "../molecules/Post";

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
