import { Post } from "@/app/_types/type";
import PostItem from "./PostItem";

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} updatedAt={post.updatedAt} id={String(post.id)}/>
      ))}
    </ul>
  );
}
